const messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        let newMessage = req.body 
        newMessage.id = id++

        messages.push(newMessage)
        res.send(messages)
    },

    read: (req, res) => {
        res.send(messages)
    },

    update: (req, res) => {
        let {time, text, name} = req.body
        let {id} = req.params

        let updatedMessage = {
            name,
            time,
            text,
            id
        }

        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1, updatedMessage)

        res.send(messages)
    },

    delete: (req, res) => {
        let {id} = req.params 

        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)

        res.send(messages)
    }


}