import $ from 'jquery';
import Rx from 'rxjs/Rx';


const source$=new Rx.Observable(observer =>{
    console.log('Creating observable')
   

    setTimeout(()=> {
        observer.next('Hello world')
        observer.next('Mokakhari Magulak')
        observer.complete();
    },3000)
   
});
console.log('middle')
source$.subscribe(
    x=>console.log(x+' !'),
    err=>console.log(err),
    complete=>console.log('complete')
)

console.log('last line');
