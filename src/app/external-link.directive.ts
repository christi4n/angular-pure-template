import { Directive, HostBinding, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'a[href]' // select all anchor tags with href attribute
})
export class ExternalLinkDirective {

  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @Input() href: string;

  constructor(@Inject (PLATFORM_ID) private platformId: string) { }

  private isLinkExternal() {
    return (
      isPlatformBrowser(this.platformId) &&
      !this.href.includes(location.hostname)
    );
  }

  ngOnChanges() {
    this.hrefAttr = this.href;

    if (this.isLinkExternal()) {
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }
  }

}
