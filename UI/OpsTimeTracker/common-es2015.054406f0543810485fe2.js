(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{OaWH:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var p=a("IheW"),n=a("AytR"),r=a("8Y7J");let o=(()=>{class e{constructor(e){this.http=e,this.url=n.a.apiURL}GetTimeSheetDetails(e,t){let a=n.a.apiURL+"TimeSheet/GetTimeSheetDetailsByResource?weekStart="+e+"&resourceUserName="+t,r=new p.d;return r.append("Content-Type","multipart/form-data"),r.append("Accept","application/json"),this.http.get(a)}GetAllFileDetails(){let e=n.a.apiURL+"FileUploadWeekly/GetAllFileDetails",t=new p.d;return t.append("Content-Type","multipart/form-data"),t.append("Accept","application/json"),this.http.get(e)}GetWeekStartLookUps(e){let t=n.a.apiURL+"LookUp/GetWeekStartLookUp?year="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.get(t,{headers:a})}BindUser(){return this.http.get(this.url+"/UserDetails")}UploadExcelWeekly(e){let t=n.a.apiURL+"FileUploadWeekly/UploadFilesWeekly",a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,e,{headers:a})}DownloadTimeSheetByWeekRange(e,t){let a=n.a.apiURL+"TimeSheet/DownloadTimeSheetByWeekRange?fromWeek="+e+"&toWeek="+t,r=new p.d;return r.append("Content-Type","multipart/form-data"),r.append("Accept","application/json"),this.http.get(a,{responseType:"blob"})}GetLookUpDataByType(e){let t=n.a.apiURL+"LookUp/GetLookUpDataByType?type="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.get(t,{headers:a})}GetRecordStatusDetails(e,t,a,r){let o=n.a.apiURL+"RecordStatus/GetRecordStatusDetails?fromWeek="+e+"&toWeek="+t+"&resourceUserName="+a+"&status="+r,s=new p.d;return s.append("Content-Type","multipart/form-data"),s.append("Accept","application/json"),this.http.get(o)}SendEmail(e){let t=n.a.apiURL+"RecordStatus/SendEmail",a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,e,{headers:a})}UploadResourceDataExcel(e){let t=n.a.apiURL+"ResourceDetails/UploadResourceData",a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,e,{headers:a})}GetAllResources(e,t,a){let r=n.a.apiURL+"ResourceDetails/GetAllResourceDetails?pageNo="+e+"&pageSize="+t+"&resourceDataSearch="+a,o=new p.d;return o.append("Content-Type","multipart/form-data"),o.append("Accept","application/json"),this.http.post(r,a,{headers:o})}GetAllResourcesCount(e){let t=n.a.apiURL+"ResourceDetails/GetAllResourceCount?resourceDataSearch="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,e,{headers:a})}GetResourceDetailsById(e){let t=n.a.apiURL+"ResourceDetails/GetResourceDetailsById?recordId="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.get(t,{headers:a})}UpdateResourceDataById(e){let t=n.a.apiURL+"ResourceDetails/UpdateResourceDataById?resourceData="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,e,{headers:a})}DeleteResourceDataById(e){let t=n.a.apiURL+"ResourceDetails/DeleteResourceDataById?recordId="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,{headers:a})}BaseLineRecords(e){let t=n.a.apiURL+"ResourceDetails/BaseLineRecords?year="+e,a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,{headers:a})}GetUstId(){let e=n.a.apiURL+"ResourceDetails/GetUstId",t=new p.d;return t.append("Content-Type","multipart/form-data"),t.append("Accept","application/json"),this.http.get(e,{headers:t})}GetUstTower(){let e=n.a.apiURL+"ResourceDetails/GetUstTower",t=new p.d;return t.append("Content-Type","multipart/form-data"),t.append("Accept","application/json"),this.http.get(e,{headers:t})}GetProjectId(){let e=n.a.apiURL+"ResourceDetails/GetProjectId",t=new p.d;return t.append("Content-Type","multipart/form-data"),t.append("Accept","application/json"),this.http.get(e,{headers:t})}GetOfficeLocation(){let e=n.a.apiURL+"ResourceDetails/GetOfficeLocation",t=new p.d;return t.append("Content-Type","multipart/form-data"),t.append("Accept","application/json"),this.http.get(e,{headers:t})}LoadUserDetails(){let e=n.a.apiURL+"User/LoadUserDetails",t=new p.d;return t.append("Content-Type","multipart/form-data"),t.append("Accept","application/json"),this.http.get(e,{headers:t})}AddUser(e){let t=n.a.apiURL+"User/AddUser",a=new p.d;return a.append("Content-Type","multipart/form-data"),a.append("Accept","application/json"),this.http.post(t,e,{headers:a})}}return e.\u0275fac=function(t){return new(t||e)(r.Zb(p.b))},e.\u0275prov=r.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);