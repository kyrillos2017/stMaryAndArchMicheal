import { Component, ElementRef, OnInit, Output, ViewChild, Injector, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { IImageAssets, IImageAssetsParams } from 'src/app/shared/models/image-assets';
import { ImageAssetsService } from './../../../../services/image-assets.service';
import { IPagination } from './../../../../shared/models/response-result';
import { BaseComponent } from './../../../../shared/components/base/base.component';
import { finalize } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-images-popup',
  templateUrl: './images-popup.component.html',
  styleUrls: ['./images-popup.component.scss']
})
export class ImagesPopupComponent extends BaseComponent implements OnInit {
  @ViewChild('op') op : OverlayPanel;
  @Output('onSelectImage') onSelectImage = new EventEmitter;
  active: boolean = false;
  loading: boolean = false;
  selectedImage: IImageAssets;
  tableInit = {
    first: 1,
    globalFilter: null,
    multiSortMeta: undefined,
    rows: 3,
    sortField: undefined,
    sortOrder: 1,
  };
  totalRecords :number;
  pageIndex: number = 1
  images: IImageAssets[]= [];

  constructor(
    injector: Injector,
    private _imageAssets: ImageAssetsService
  ) {
    super(injector)
   }

  ngOnInit(): void {

  }

  show(event: Event){
    this.getImages(this.tableInit);
    // this.active = true
    this.op.toggle(event)
  }
  getImages(event: LazyLoadEvent){
    this.loading = true
    let params: IImageAssetsParams = {
      PageIndex: this.pageIndex,
      PageSize: 3,
      Sort: event.sortField,
      Search: event.globalFilter,
    }
    this._imageAssets.getAll(params).pipe(finalize(()=> this.loading = false)).subscribe(
      (res: IPagination<IImageAssets>) => {
        this.images = res.result
        this.totalRecords = res.count;
      }
    )

  }

  paginate(event: any){
    this.pageIndex = event.page +1
    this.getImages(this.tableInit)
  }
  onRowSelect(event:Event) {
    this.onSelectImage.emit(event)
  }




public progress: number;
public message: string;
@Output() public onUploadFinished = new EventEmitter();
public uploadFile = (files: any) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();

  formData.set('file', fileToUpload, fileToUpload.name);

  this._imageAssets.upload(formData)
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / (event.total ? event.total : 0));
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';

        this.onUploadFinished.emit(event.body);
        let body: any = event.body;
        const domain = event.url?.split('/api')[0]
        const path = body.img?.imgUrl?.split('wwwroot')[1]
        body.img.imgUrl = domain + "/" + path
        this.selectedImage = body.img
      }
    });
}

}
