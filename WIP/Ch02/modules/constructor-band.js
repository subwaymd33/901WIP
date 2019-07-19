

function Band(name, members){
    this.name = name;
    this.members=members;
}

Band.prototype.memberCount = function() {
    return this.members.length;
}

Band.prototype.hasMember = function(memberName){
    return this.members.includes(memberName);
}
module.exports = Band;