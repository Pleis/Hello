import {EventEmitter} from './class EventEmitter'

export default class movie extends EventEmitter {
    constructor(dataName, dataYear, dataDuration) {
      this.name = dataName;
      this.year = dataYear;
      this.duration = dataDuration;
      this.actors = [];
    }
    Text() {
      console.log("hola")
    }
    play(){console.log("play")}
    pause(){console.log("pause")}
    resume(){console.log("resume")}
    addCast(cast) { 
      if (Array.isArray(cast)) {
            for (var i = 0; i < cast.length; i++) {
              this.actors.push(cast[i]);
          }
      } else {
          this.actors.push(cast);
      }
    }
  }
