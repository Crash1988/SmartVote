import { Game, Team } from './_MODELS/mlb-models';
import { MlbService } from './_SERVICES/mlb.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'SmartVote';
  totalGames = 0;
  games: Game[];
  teams: Team[] = [];
  dateIni = new Date('03/28/2019');
  dateInitial = new Date('03/28/2019');
  sqltext = '';
  constructor(private mlbService: MlbService) {

  }
  ngOnInit() {
    this.FetchGamesByDate(this.dateIni);
    // this.addDay();
  }
  addDay() {
    this.dateIni = new Date (this.dateIni.valueOf() + 1 * 864e5 );
    this.FetchGamesByDate(this.dateIni);
  }
  restDay() {
    this.dateIni = new Date (this.dateIni.valueOf() - 1 * 864e5 );
    this.FetchGamesByDate(this.dateIni);
  }
  onDateSelect(event: any) {
    console.log(event);
    this.FetchGamesByDate(this.dateIni);
  }

  checkInitialDate() {
    return this.dateIni.valueOf() === this.dateInitial.valueOf();

  }

  FetchGamesByDate(date: Date) {
    this.mlbService.FetchGame(`${date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()}`).subscribe(res => {
      console.log(res);
      this.totalGames = res.totalGames;
      if (res && res.totalGames > 0) {
        this.games = res.dates[0].games;
      }
      this.DisplayTeams();
    });
  }

  DisplayTeams() {
    this.games.forEach(game => {
      // console.log('Away' , game.teams.away.team.id, game.teams.away.team.name);
      // console.log('Home' , game.teams.home.team.id, game.teams.home.team.name);
      let existA = false;
      let existH = false;
      this.teams.forEach(team => {
        if (team.id === game.teams.away.team.id ) {
          existA = true;
        }
        if (team.id === game.teams.home.team.id ) {
          existH = true;
        }
      });

      if (!existA) {
        this.teams.push(game.teams.away.team);
      }
      if (!existH) {
        this.teams.push(game.teams.home.team);
      }
    });
    this.sqltext = '';
    this.teams.forEach( team => {
      this.sqltext += `("${team.name}", ${team.id}),`;
    });
    console.log(this.sqltext);
    console.log(this.teams.length);


  }
}
