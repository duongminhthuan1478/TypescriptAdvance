interface Observer<T> {
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}

interface Subscriable<T> {
  subscribe(observer: Partial<Observer<T>>): Unsubscribable;
}

interface Unsubscribable {
  unsubscribe(): void;
}

type TeardownLogic = Unsubscribable | (() => void) | void;

class Subscriber<T>  {
  next(value?: T): void { console.log("next"); }
  error(err?: any): void { console.log("error"); }
  complete(): void { console.log("complete"); }
  unsubscribe(): void { console.log("unsubscribe"); }
}

class Observable<T> implements Subscriable<T>{
  protected source: Observable<any> | undefined;
  // this: Observable<T> được sử dụng để truy cập đối tượng đang được thao tác bên trong một phương thức hoặc hàm, this context chính là lúc nó new Observable
  constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic) {
    if (subscribe) {
      //..........this.source?.subscribe(subscriber);
    }
  }

  subscribe(observer?: Partial<Observer<T>>): Unsubscribable;
  subscribe(next: (value: T) => void): Unsubscribable;
  subscribe(next?: ((value: T) => void) | null, error?: ((error: any) => void) | null, complete?: (() => void) | null): Unsubscribable;
  subscribe(observerOrNext?: Partial<Observer<T>> | ((value: T) => void) | null,
    error?: ((error: any) => void) | null,
    complete?: (() => void) | null): Unsubscribable {
    //........
    return;
  }
}

interface AuthUser {
  userName: string;
  token: string;
}

new Observable<AuthUser>().subscribe({
  next: (data: AuthUser) => {
    console.log(data)
  },
  error(error) {
    console.log("error", error)
  }
})