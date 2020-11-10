### Exercício 1
a. Para criar um hash podemos usar a função hash do bcrypt
que é assíncrona.
 Só que ela precisa de um salt. Este é gerado a partir da função genSalt que espera receber o cost, ou, como a lib bcryptjs chama, os rounds.

### Exercício 2
