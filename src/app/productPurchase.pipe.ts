import { Pipe,
			PipeTransform } from '@angular/core'

@Pipe({
	name: 'TestPipe'
})

export class Purchase10Pipe implements PipeTransform{
	transform(value: string):string{
		if(value.length <= 10 ){
			return value;
		}		
		return value = (value.substr(0,10)+'...')
	}
}