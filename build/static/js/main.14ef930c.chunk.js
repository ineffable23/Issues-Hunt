(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),c=a.n(r),l=a(50),i=a(51),o=a(57),u=a(52),m=a(58),d=a(30),h=a.n(d),p=(a(83),a(31)),f=a.n(p),g=(a(84),function(){return s.a.createElement("div",{className:"header-block"},s.a.createElement("h1",{className:"header-title"},"Issues Hunt"),s.a.createElement("div",{className:"contacts-wrapper"},"Created By ",s.a.createElement("a",{rel:"noopener noreferrer",className:"website-link",target:"_blank",href:"https://fulin426.github.io/"},"Fu-Lin Liu"),s.a.createElement("div",{className:"icons-container"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/fu-lin-liu/"},s.a.createElement("i",{className:"fab fa-linkedin fa-2x header-icon"})),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/fulin426/Issues-Hunt"},s.a.createElement("i",{className:"fab fa-github-square fa-2x header-icon"})))))}),v=(a(85),function(){return s.a.createElement("div",{className:"description"},s.a.createElement("div",{className:"description-wrapper"},s.a.createElement("p",null,"Search over 22 million open issues across GitHub")))}),E=a(29),b=a.n(E),N=a(53),y=a.n(N),k=a(28),w=a.n(k),S=a(32),P=a.n(S),L=(a(86),function(e){var t=e.searchIssues,a=e.input,n=e.searchInput,r=e.readOnly;return s.a.createElement(y.a,{className:"SearchBar",onSubmit:t},s.a.createElement(P.a,null,s.a.createElement(w.a,{value:a,onChange:n,readOnly:r,placeholder:"Search all issues..","aria-label":"Search Input","aria-describedby":"basic-addon2"}),s.a.createElement(P.a.Append,null,s.a.createElement(b.a,{className:"search-button",onClick:t},"Search"))))}),I=(a(97),function(e){var t=e.clearSearchbar;return s.a.createElement("div",{className:"clear-query-container"},s.a.createElement("div",{className:"query-item",onClick:t},"Clear search query and filters ",s.a.createElement("i",{className:"far fa-times-circle"})))}),B=a(22),C=a.n(B),O=a(13),x=a.n(O),D=a(16),A=a.n(D),R=function(e){var t=e.passID,a=e.currentLabel,n=e.searchedLabel;return'"'.concat(a,'"')===n?s.a.createElement("div",{"data-id":t},s.a.createElement("i",{className:"fas fa-check"})):s.a.createElement("div",{"data-id":t,className:"icon-box"})},_=function(e){var t=e.searchByLabel,a=e.searchedLabel,n=[["good+first+issue","Good First Issue"],["help+wanted","Help Wanted"],["discussion","Discussion"],["enchancement","Enhancement"],["bug","Bug"],["question","Question"],["invalid","Invalid"],["hacktoberfest","Hacktoberfest"]].map(function(e){return s.a.createElement(x.a.Item,{key:e[0],as:"button","data-id":e[0],onClick:t},s.a.createElement("div",{className:"checkmark-list-wrapper"},s.a.createElement("div",{className:"checkmark-wrapper"},s.a.createElement(R,{passID:e[0],searchedLabel:a,currentLabel:e[0]})),s.a.createElement("div",{"data-id":e[0],className:"dropdown-text-wrapper"},e[1])))});return s.a.createElement(A.a,{id:"LabelDropdown",title:"Label",className:"DropdownButton"},n)},H=function(e){var t=e.currentLanguage,a=e.searchedLanguaged,n=e.passID;return t===a?s.a.createElement("div",{"data-id":n},s.a.createElement("i",{className:"fas fa-check"})):s.a.createElement("div",{"data-id":n,className:"icon-box"})},F=function(e){var t=e.searchByLanguage,a=e.searchedLanguaged,n=["JavaScript","Python","Java","HTML","CSS","Ruby","C#","PHP","C++"].map(function(e){return s.a.createElement(x.a.Item,{key:e,"data-id":e,onClick:t},s.a.createElement("div",{className:"checkmark-list-wrapper"},s.a.createElement("div",{className:"checkmark-wrapper"},s.a.createElement(H,{passID:e,searchedLanguaged:a,currentLanguage:e})),s.a.createElement("div",{"data-id":e,className:"dropdown-text-wrapper"},e)))});return s.a.createElement(A.a,{id:"LanguageDropdown",title:"Language",className:"DropdownButton"},n)},j=function(e){var t=e.searchedSort,a=e.currentSortOption,n=e.passID;return t===a?s.a.createElement("div",{"data-id":n},s.a.createElement("i",{className:"fas fa-check"})):s.a.createElement("div",{"data-id":n,className:"icon-box"})},q=function(e){var t=e.searchBySort,a=e.currentSortOption,n=[["","Best Match (default)"],["&sort=created&order=desc","Newest"],["&sort=created&order=asc","Oldest"],["&sort=comments&order=desc","Most Comments"],["&sort=comments&order=asc","Least Comments"],["&sort=Updated&order=desc","Recently Updated"]].map(function(e){return s.a.createElement(x.a.Item,{key:e,"data-id":e[0],onClick:t},s.a.createElement("div",{className:"checkmark-list-wrapper"},s.a.createElement("div",{className:"checkmark-wrapper"},s.a.createElement(j,{passID:e[0],searchedSort:e[0],currentSortOption:a})),s.a.createElement("div",{"data-id":e[0],className:"dropdown-text-wrapper"},e[1])))});return s.a.createElement(A.a,{id:"Dropdownsort",title:"Sort",className:"DropdownButton"},n)},M=(a(122),function(e){var t=e.totalCount,a=e.searchedLabel,n=e.searchByLabel,r=e.searchedLanguaged,c=e.searchByLanguage,l=e.searchBySort,i=e.currentSortOption;return s.a.createElement(C.a,{className:"ResultsHeader"},s.a.createElement("div",{className:"open-issues"},s.a.createElement("i",{className:"fas fa-exclamation-circle"})," ",t," Open"),s.a.createElement(q,{searchBySort:l,currentSortOption:i}),s.a.createElement(_,{searchedLabel:a,searchByLabel:n}),s.a.createElement(F,{searchedLanguaged:r,searchByLanguage:c}))}),W=function(e){var t=e.labels.map(function(e){return s.a.createElement("div",{key:e.id,style:{backgroundColor:"#"+e.color},className:"issue-label"},e.name)});return s.a.createElement("div",{className:"issues-label-container"},t)},J=(a(126),function(e){var t=e.issuesReturn.items.map(function(e){return s.a.createElement(C.a,{key:e.id},s.a.createElement("div",{className:"issues-container"},s.a.createElement("div",{className:"exclamation"},s.a.createElement("i",{className:"fas fa-exclamation-circle fa-lg"})),s.a.createElement("div",{className:"title-description-container"},s.a.createElement("div",{className:"issues-label-wrapper"},s.a.createElement("p",{className:"issues-title"},s.a.createElement("a",{href:e.html_url}," ",e.title)),s.a.createElement(W,{labels:e.labels})),s.a.createElement("div",{className:"issues-body"},s.a.createElement("p",{className:"issues-body-text"},e.body,"...")),s.a.createElement("div",{className:"description-avatar-wrapper"},s.a.createElement("p",{className:"issues-description"},"#",e.number," opened on ",function(e){var t=new Date(e).toString(),a=t.slice(4,10),n=t.slice(11,15);return"".concat(a,", ").concat(n)}(e.created_at)," by ",s.a.createElement("a",{href:e.user.html_url,alt:e.user.login},e.user.login)),s.a.createElement("a",{href:e.user.html_url,alt:e.user.login},s.a.createElement("img",{className:"user-avatar",src:e.user.avatar_url,alt:e.user.login})))),s.a.createElement("div",{className:"comments"},s.a.createElement("a",{className:"comments-link",href:e.html_url},s.a.createElement("i",{className:"far fa-comment-alt"})," ",e.comments))))});return s.a.createElement("div",{className:"results-list"},t)}),T=(a(47),function(){return s.a.createElement("div",{className:"blank-container"},s.a.createElement("div",{className:"error-handle-wrapper"},s.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x"}),s.a.createElement("div",{className:"no-results-found"},s.a.createElement("h5",null,"Welcome to Issues Hunt"),s.a.createElement("p",null,"Issues Hunt can help potential first-time GitHub contributors discover issues. To get started, try searching for issues labeled with ",s.a.createElement("span",{className:"issue-label help-wanted"},"help wanted")," or ",s.a.createElement("span",{className:"issue-label good-first-issue"},"good first issue")))))}),G=function(){return s.a.createElement("div",{className:"blank-container"},s.a.createElement("div",{className:"error-handle-wrapper"},s.a.createElement("i",{className:"fas fa-exclamation-circle fa-2x"}),s.a.createElement("div",{className:"no-results-found"},s.a.createElement("h5",null,"No Results found"),s.a.createElement("h5",null,"Please try a different search parameter"))))},Q=(a(48),function(e){var t=e.currentPage,a=e.selectedPage,n=e.selectPageNumber;return t===a?s.a.createElement("button",{"data-id":t,className:"selected-page individual-number",onClick:n},t):s.a.createElement("button",{"data-id":t,className:"individual-number",onClick:n},t)}),U=function(e){var t=e.firstPage,a=e.lastPage,n=e.selectedPage,r=e.nextButton,c=e.previousButton,l=e.selectPageNumber,i=[];if(a<=5)for(var o=1;o<=a;)i.push(o),o++;1<=n<=5&&a>5&&(i=[t,t+1,t+2,t+3,t+4,"...",a]),n>5&&n<=a-5&&(i=[t,"..",n-1,n,n+1,"...",a]),n>=a-4&&n<=a&&a>5&&(i=[t,"...",a-4,a-3,a-2,a-1,a]);var u=i.map(function(e){return s.a.createElement(Q,{key:e,currentPage:e,selectedPage:n,selectPageNumber:l})});return s.a.createElement("div",{className:"widget-container"},s.a.createElement("button",{className:"previous-button",onClick:c},"Previous"),u,s.a.createElement("button",{className:"next-button",onClick:r},"Next"))},z=(a(127),function(){return s.a.createElement("div",{className:"footer"},"\xa9 2019 Fu-Lin Liu")}),K=a(56),V=a.n(K),X=(a(149),function(){return Object(n.useEffect)(function(){window.scrollTo(0,0)}),s.a.createElement("div",{className:"blank-container"},s.a.createElement("div",{className:"spinner-container"},s.a.createElement(V.a,{type:"TailSpin",color:"#00BFFF",height:"75",width:"75"})))}),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={issues:"",issuesCount:"0",returnedAPI:"no",spinner:"hide",errorMessage:"",input:"",readOnly:"",language:"",label:"",sortOption:"",pageLink:"",firstPage:1,lastPage:15,selectedPage:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"showSpinner",value:function(){this.setState({returnedAPI:"pending",spinner:"show"})}},{key:"callAPI",value:function(){var e,t,a,n=this,s=this.state.input;e=""===this.state.label?"":"+label:".concat(this.state.label),t=""===this.state.language?"":"+language:".concat(this.state.language),a=""===this.state.sortOption?"":a=this.state.sortOption,h.a.get("https://api.github.com/search/issues?q=".concat(s,"+state:open").concat(e).concat(t,"&client_id=").concat(f.a.clientID,"&client_secret=").concat(f.a.clientSecret).concat(a,"&per_page=25")).then(function(e){var t,a;console.log(e.data);var s=0;if("0"!==e.data.total_count.toLocaleString()&&void 0!==e.headers.link){a=(t=e.headers.link.split(";"))[0].slice(1,t[0].length-2);var r=(s=t[1].split("=")).length-1;s=s[r].slice(0,s[r].length-1)}n.setState({issues:e.data,issuesCount:e.data.total_count.toLocaleString(),returnedAPI:"yes",spinner:"hide",lastPage:parseInt(s),pageLink:a,readOnly:""})},function(e){console.log(e.message),n.setState({errorMessage:e.message})})}},{key:"searchInput",value:function(e){this.setState({input:e.target.value})}},{key:"searchByLabel",value:function(e){var t=this;"show"!==this.state.spinner&&this.setState({label:'"'.concat(e.target.dataset.id,'"'),selectedPage:1},function(){return t.searchNormal()})}},{key:"searchByLanguage",value:function(e){var t=this;"show"!==this.state.spinner?this.setState({language:e.target.dataset.id,selectedPage:1},function(){return t.searchNormal()}):console.log("clicked")}},{key:"searchBySort",value:function(e){var t=this;"show"!==this.state.spinner&&this.setState({sortOption:e.target.dataset.id,selectedPage:1},function(){return t.searchNormal()})}},{key:"clearSearchbar",value:function(){var e=this;this.setState({issues:"",issuesCount:"0",input:"",language:"",label:"",sortOption:""},function(){return e.ResultsListRender()})}},{key:"searchNormal",value:function(){this.showSpinner(),this.callAPI()}},{key:"search",value:function(e){var t=this;e.preventDefault(),this.showSpinner(),this.setState({issues:"",issuesCount:"0",language:"",label:"",sortOption:"",readOnly:"readonly"},function(){return t.callAPI()})}},{key:"ResultsListRender",value:function(){var e=this;return"yes"===this.state.returnedAPI&&""!==this.state.issues&&"0"!==this.state.issuesCount?s.a.createElement("div",null,s.a.createElement(J,{issuesReturn:this.state.issues}),s.a.createElement(U,{selectPageNumber:function(t){return e.selectPageNumber(t)},nextButton:function(t){return e.nextButton(t)},previousButton:function(t){return e.previousButton(t)},firstPage:this.state.firstPage,lastPage:this.state.lastPage,selectedPage:this.state.selectedPage})):"show"===this.state.spinner&&"yes"!==this.state.returnedAPI?s.a.createElement(X,null):"0"===this.state.issuesCount&&""!==this.state.issues?s.a.createElement(G,null):(this.state.issues,s.a.createElement(T,null))}},{key:"QueryRender",value:function(){var e=this;return""!==this.state.input||""!==this.state.language||""!==this.state.label||""!==this.state.issues?s.a.createElement(I,{clearSearchbar:function(t){return e.clearSearchbar(t)}}):null}},{key:"previousButton",value:function(e){var t=this;e.preventDefault(),1!==this.state.selectedPage&&(this.showSpinner(),this.setState({selectedPage:this.state.selectedPage-1},function(){return t.callApiFromWidget()}))}},{key:"nextButton",value:function(e){var t=this;e.preventDefault(),this.state.selectedPage<this.state.lastPage?(this.showSpinner(),this.setState({selectedPage:this.state.selectedPage+1},function(){return t.callApiFromWidget()})):this.setState({selectedPage:this.state.selectedPage})}},{key:"callApiFromWidget",value:function(){var e=this;h.a.get("".concat(this.state.pageLink).concat(this.state.selectedPage)).then(function(t){console.log(t.data),console.log(t.headers),e.setState({issues:t.data,returnedAPI:"yes",spinner:"hide"})},function(t){console.log(t.message),e.setState({errorMessage:t.message})})}},{key:"selectPageNumber",value:function(e){var t=this;e.preventDefault();var a=parseInt(e.target.dataset.id);isNaN(a)||(this.showSpinner(),this.setState({selectedPage:a},function(){return t.callApiFromWidget()}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(g,null),s.a.createElement("div",{className:"container"},s.a.createElement(v,null),s.a.createElement(L,{readOnly:this.state.readOnly,searchInput:function(t){return e.searchInput(t)},searchIssues:function(t){return e.search(t)},input:this.state.input}),this.QueryRender(),s.a.createElement(M,{searchBySort:function(t){return e.searchBySort(t)},currentSortOption:this.state.sortOption,searchedLabel:this.state.label,searchedLanguaged:this.state.language,totalCount:this.state.issuesCount,searchByLabel:function(t){return e.searchByLabel(t)},searchByLanguage:function(t){return e.searchByLanguage(t)}}),this.ResultsListRender(),s.a.createElement(z,null)))}}]),t}(n.Component);c.a.render(s.a.createElement(Y,null),document.getElementById("root"))},31:function(e,t){e.exports={clientID:"19b336af5cfb0ed688a1",clientSecret:"4849a46d86d872e9fb533a298664a16e4ee5e9cd"}},47:function(e,t,a){},48:function(e,t,a){},59:function(e,t,a){e.exports=a(150)},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},97:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.14ef930c.chunk.js.map