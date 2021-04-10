import { Actor } from './class actor';
import { Logger } from './class Logger';
import { movie } from './movies';
const terminator = new movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
const social = {
  share(friendName) {
    console.log(friendName + "share" + terminator.name);
  },

  like(friendName) {
    console.log(friendName + "like" + terminator.name);
  }

};
terminator.addCast(arnold);
terminator.addCast(actors);
terminator.play();
terminator.pause();
terminator.resume();
terminator.share('Mike Blossom');
terminator.like('Mike Blossom');