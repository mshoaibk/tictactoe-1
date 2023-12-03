import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return (
        item.username.toLowerCase().includes(searchText) ||
        item.lastMessage.toLowerCase().includes(searchText)
      );
    });
  }
}
