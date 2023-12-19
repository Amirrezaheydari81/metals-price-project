// console.log("OK");

// const formatter = new Intl.NumberFormat('fa-IR', {
//     style: 'currency',
//     currency: 'IRR',
//     maximumSignificantDigits: 3,

// })
// function separate(Number) {
//     Number += '';
//     Number = Number.replace(',', '');
//     x = Number.split('.');
//     y = x[0];
//     z = x.length > 1 ? '.' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(y))
//         y = y.replace(rgx, '$1' + ',' + '$2');
//     return y + z;
// }

const ApiUrl = "https://call1.tgju.org/ajax.json";
const ApiUrlFetch = fetch(ApiUrl);
// let aluminumHtml = document.getElementById('aluminum');
let updateTime;

// let aluminumTb = document.createElement("td");
// metalsTable.appendChild(aluminumTb);
let TableBody = document.getElementById("metals_table_body");

function CreateElAndSetValueTag(name, masterTagId, OrginalName, Price, Maxprice, UpdateTime) {
    let metalsTable = document.getElementById(masterTagId);
    // child1 Name
    let master2 = document.createElement("tr");
    // metalsTable.setAttribute("id", name + "_Master");
    let child1 = document.createElement("th");
    // child1.setAttribute("id", name + "_metal");
    child1.innerText = OrginalName;
    child1.setAttribute('scope', 'row');
    master2.appendChild(child1);
    // child 2 Price
    let child2 = document.createElement("td");
    // child2.setAttribute("id", name + "_Price");
    child2.innerText = Price;
    master2.appendChild(child2);
    // child 3 Max Price
    let child3 = document.createElement("td");
    // child3.setAttribute("id", name + "_MaxPrice");
    child3.innerText = Maxprice;
    master2.appendChild(child3);
    // child 3 Max Price
    let child4 = document.createElement("td");
    // child4.setAttribute("id", name + "_UpdateTime");
    child4.innerText = UpdateTime;
    master2.appendChild(child4);
    TableBody.appendChild(master2);
    // metalsTable.appendChild(master2);
}
// Html Samle =>
{/* <td scope="row" id="tb_metals">آلومینیوم</td>
<td id="tb_metals_price">4800</td>
<td id="tb_metals_max_price">9800</td>
<td id="tb_metals_description">lorem ipsome</td> */}

ApiUrlFetch.then(res => res.json())
    .then(data => {
        console.log("Ok Api Response");
        const dataCurrent = data.current;
        console.log(dataCurrent);

        CreateElAndSetValueTag("aluminium", "metals_list", "آلومینیوم", dataCurrent.aluminium.p, dataCurrent.aluminium.h, dataCurrent.aluminium.t);
        CreateElAndSetValueTag("copper", "metals_list", "مس", dataCurrent.copper.p, dataCurrent.copper.h, dataCurrent.copper.t);
        CreateElAndSetValueTag("lead", "metals_list", "سرب", dataCurrent.lead.p, dataCurrent.lead.h, dataCurrent.lead.t);
        CreateElAndSetValueTag("nickel", "metals_list", "نیکل", dataCurrent.nickel.p, dataCurrent.nickel.h, dataCurrent.nickel.t);
        CreateElAndSetValueTag("tin", "metals_list", "قلع", dataCurrent.base_global_tin.p, dataCurrent.base_global_tin.h, dataCurrent.base_global_tin.t);
        // CreateElAndSetValueTag("platinum", "metals_list", "پلاتیوم", dataCurrent.platinum.p, dataCurrent.platinum.h, dataCurrent.platinum.t);
        // CreateElAndSetValueTag("zinc", "metals_list", "روی", dataCurrent.zinc.p, dataCurrent.zinc.h, dataCurrent.zinc.t);
        // console.log(dataCurrent.aluminium.h);
    });