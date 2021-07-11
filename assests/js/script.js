const skill_type = document.querySelectorAll(".skill_type");
const skill_list = document.querySelectorAll(".skill_list");

skill_type.forEach(skill => {
    skill.addEventListener("click", expandList)
});

function expandList() {
    let currrentSkill = this.parentNode;
    skill_list.forEach(skill_list => {
        skill_list.className = "skill_list skill_close";
    });
    if (currrentSkill.className == "skill_list skill_close") {
        currrentSkill.className = "skill_list skill_open";
    }
}