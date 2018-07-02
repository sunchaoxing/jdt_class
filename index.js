
class JDT {
  constructor(jdt,total, index){
    this.index = index;
    this.total = total;
    jdt.innerHTML = this._html();
  }
  _html() {
    let html = `<div style="width: 80%;margin:auto auto;">
                     <div style="width:100%;height:30px;">
    `,
    span_html = ``;
    let color = 'red';
    const w = 100/this.total;
    for(let i =0 ;i<this.total;i++) {
      if(i<this.index-1) {
        color = 'green';
      } else {
        if(i == this.index -1) color = '#fa9915';
        else color = 'red';
      }
      span_html += `
          <span style="float:left;width:${w}%; height:30px;background-color:${color};" index=${i+1}> </span>
      `;
    }
    html = html + span_html +`</div></div>`;
    return html;
  }
}
const jdt = document.getElementById('jdt');
let jd = new JDT(jdt,6,2);

