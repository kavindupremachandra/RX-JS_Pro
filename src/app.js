import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*const source$=Rx.Observable.interval(1000).take(11);

const source$=Rx.Observable.time(2000,100).take(11);*/

<<<<<<< HEAD
const source$=Rx.Observable.range(85,100);
=======
const source$=Rx.Observable.range(50,100);
>>>>>>> 07fa6b652c2a7fcd9e10a519f90e94edd92a2763

source$.subscribe(
    x=>console.log(x),
    err=>console.log(err),
    ()=>console.log('completed'))
