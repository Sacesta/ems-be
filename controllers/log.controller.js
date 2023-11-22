const { connect } = require('../db/db');


class LogController {

    db = {};

    constructor() {
        this.db = connect();
        this.db.sequelize.sync({force:true});
    }

    // update log
    async update(sessionId,data){
        try{
            const session = await this.db.session.findByPk(sessionId)
            const log = await session.getLog()
            if(!log){
                await session.createLog({data})
            }else{
                if(log.approved){
                    return {warning: "Log has been approved, it can't be updated now"}
                }else{
                    await log.update({data})
                }
            }
            return {success : "Log updated"}
        }catch(err){
            console.log(err)
            return {error: "Update Log: Internal Server Error"}
        }
    }

    // approve log
    async approve(logId){
        try{
            const log = await this.db.log.findByPk(logId)
            await log.update({approved: true})
            return {success: "Log Approved"}
        }catch(err){
            console.log(err)
            return {error: "Approve Log: Internal Server Error"}
        }
    }

}

module.exports = new LogController();