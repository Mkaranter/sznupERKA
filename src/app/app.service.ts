import { Injectable } from '@angular/core'
import { AppState } from './app-state';


@Injectable()
export class AppService {
    constructor() {}

    getAppState() {
        return AppState
    }

    setUserAction(action): void {
        AppState.userAction = action
    }

    setAnimalType(animalType): void {
        AppState.animalType = animalType
    }
}