import { Component, ElementRef } from '@angular/core';
import license from './license-key';
import * as UIExtension from '../../foxit-lib/UIExtension.full.js';
import * as PDFViewCtrl from '../../foxit-lib/PDFViewCtrl.full.js'

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PDFViewerComponent{
  pdfcntrl: any;
  pdfui: any;
  numList: any;

  constructor(private element: ElementRef) { 
    
  }

  ngOnInit(): void {
    this.numList = '';
    this.pdfui = new UIExtension.PDFUI({
      viewerOptions: {

        libPath: '/foxit-lib',

        jr: {

          ...license,

          fontPath: location.origin + '/foxit-lib/assets/external/brotli/'

        }

      },

      renderTo: this.element.nativeElement,

      addons: [

        '/foxit-lib/uix-addons/export-form/',

        '/foxit-lib/uix-addons/file-property/',

        '/foxit-lib/uix-addons/full-screen/',

        '/foxit-lib/uix-addons/import-form/',

        '/foxit-lib/uix-addons/multi-media/',

        '/foxit-lib/uix-addons/password-protect/',

        '/foxit-lib/uix-addons/path-objects/',

        '/foxit-lib/uix-addons/print/',

        '/foxit-lib/uix-addons/redaction/',

        '/foxit-lib/uix-addons/text-object/',

        '/foxit-lib/uix-addons/undo-redo/'

      ]

    });
    
    this.pdfcntrl =  UIExtension.PDFViewCtrl();
   
    this.pdfui.eventEmitter.on(this.pdfcntrl.ViewerEvents.pageNumberChange, (newPageNumber) => {
      console.log(newPageNumber);
    })
    
    
  }

  update(val){
    this.numList = val;
  }

  savePageNum(){
    console.log(this.numList);
    let val = this.numList.split(',');
    this.numList = val;
  }
}
