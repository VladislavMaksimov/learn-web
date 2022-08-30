type Listener<T> = (items: T[]) => void;

abstract class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listener: Listener<T>) {
        this.listeners.push(listener);
    }
}

export default State;