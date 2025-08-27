
const districtsByState = {
  "Andhra Pradesh": ["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","SPS Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"],
  "Arunachal Pradesh": ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke-Kessang","Papum Pare","Shi-Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang"],

  "West Bengal": ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],

  "karnataka": ["Bagalkot","Ballari","belagavi","benaluru rural","bengaluru urban","bidar","chamarajanagar","chikkaballapur","chikkamagaluru","chitradurga","dakshina kannada","davanagere","dharwad","gadag","hassan","haveri","kalaburagi","kodagu","kolar","koppal",'mandya','mysuru','richur','ramnagara/bengaluru south','shivamogga','tumakuru','udupi','uttara kannada','vijayapura','vijayanagara','yadgir']
};

const stateSelect    = document.getElementById("state");
const districtSelect = document.getElementById("district");

//  On state change → rebuild district list
stateSelect.addEventListener("change", () => {
  const districts = districtsByState[stateSelect.value] || [];

  // Clear previous options
  districtSelect.innerHTML = '<option value="">--Select district--</option>';

  // Add new options
  districts.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    districtSelect.appendChild(opt);
  });
});
// Members section


const countInput   = document.getElementById("memberCount");
const wrapper      = document.getElementById("membersWrapper");


function buildMemberRow(index) {
  return `
    <div class="section">
      <h3>Member ${index + 1}</h3>

      <label>Name
        <input name="member[${index}][name]" type="text" required>
      </label>

      <label>Gender
        <select name="member[${index}][gender]" required>
          <option value="">--Select--</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
      </label>

      <label>DOB
        <input id="dob" name="member[${index}][dob]" type="date" required>
      </label>

      <label>Marital status
        <select name="member[${index}][marital]" required>
          <option value="">--Select--</option>
          <option>Single</option>
          <option>Married</option>
          <option>Widow</option>
        </select>
      </label>
    </div>
  `;
}

countInput.addEventListener("input", () => {
  const n = parseInt(countInput.value, 10) || 0;

  const safeN = Math.min(Math.max(n, 0), 50);

  wrapper.innerHTML = Array.from({length: safeN}, (_, i) => buildMemberRow(i)).join("");
});