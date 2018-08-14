import { Container } from "inversify";

export interface IServiceLocator {
    resolve<T>(serviceIdentifier: string): T;
    setContainer(container: Container): void;
}

class ServiceLocator implements IServiceLocator {
    private container!: Container;

    resolve<T>(serviceIdentifier: string): T {
        return this.container.get<T>(serviceIdentifier);
    }

    setContainer(container: Container): void {
        this.container = container;
    }
}

export const locator: IServiceLocator = new ServiceLocator();
