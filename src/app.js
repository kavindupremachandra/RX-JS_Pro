import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*const source$=Rx.Observable.interval(1000).take(11);

const source$=Rx.Observable.time(2000,100).take(11);*/

const source$=Rx.Observable.range(50,100);

source$.subscribe(
    x=>console.log(x),
    err=>console.log(err),
    ()=>console.log('completed'))
