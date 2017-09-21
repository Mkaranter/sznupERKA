import { Injectable } from '@angular/core'
import { Animal } from './Animal'
import { ANIMALS } from './list-animals';

@Injectable()
export class AnimalService {
    getAnimals(): Promise<Animal[]> {
        return Promise.resolve(ANIMALS)
    }
}