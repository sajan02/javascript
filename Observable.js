/**
 * 
 * An observable is just a function. This function takes in an observer as an argument, 
 * and returns a subscription object.
 */

function Observable(subscribe) {
    this.subscribe = subscribe;
  }

Observable.from = (values) => {
  return new Observable((observer) => {
    values.forEach((value) => observer.next(value));
    observer.complete();
    return ({
      unsubscribe() {
        console.log('unsubscribbed');
      }
    });
  });
}
/**
 * An observer is just an object with three methods: next which takes in a value, 
 * error which takes in an error message and complete with has no arguments. 
 * This is what a standard (logging) observer looks like:} subscribe 
 */
const observer = {
  next(value) {
    console.log(value);
  },
  error(err) {
   console.error(err);
  },
  complete() {
    console.info('done');
  }
};
const numbers$ = Observable.from([0, 1, 2, 3, 4]);
const subscription = numbers$.subscribe(observer);
setTimeout(subscription.unsubscribe, 500);