import { distinctUntilChanged, MonoTypeOperatorFunction } from 'rxjs'
import sequenceEqual from 'src/app/modules/shared/utils/sequence-equal';

export default function distinctUntilSequenceKeyChanged<T>(key: keyof T): MonoTypeOperatorFunction<T[]> {
    return distinctUntilChanged((x: T[], y: T[]) => sequenceEqual(x.map(item => item[key]),  y.map(item => item[key])));
}
