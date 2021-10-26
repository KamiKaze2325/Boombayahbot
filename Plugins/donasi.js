let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three [089523072881]
╰────

╭─「 Donasi • Non Pulsa 」
│ • DANA : 089523072881
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
