const skill_type_content = document.querySelectorAll(".skill_type_content");
const skill_type_header = document.querySelectorAll(".skill_type_header");

skill_type_header.forEach(skill => {
    skill.addEventListener("click", toggleSkillList)
});

function toggleSkillList() {
    let currrentSkill = this.parentNode.childNodes[3];
    if (currrentSkill.className == "skill_type_content") {
        currrentSkill.className = "skill_type_content closed";
    } else {
        skill_type_content.forEach(skill_content => {
            skill_content.className = "skill_type_content closed";
        });
        currrentSkill.className = "skill_type_content"
    }
    console.log(currrentSkill);
}