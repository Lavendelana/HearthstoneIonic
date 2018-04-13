import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'html',
})
export class HtmlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  	transform(value: string): string {
  		return value.replace(/(\\n|\_)/g, " ").replace(/(\$|\#|\[x\])/g, "");
	}
}
