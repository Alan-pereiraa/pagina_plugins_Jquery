// Quando acontecer um evento no seletor "menu-hamburger"
$('.menu-hamburger').click(function() {
    $('.options-menu').slideToggle();
})

$('#telefoneInput').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
});

$('#cpfInput').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cepInput').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");

        const nomeInput = $("#nomeInput").val();
        const cpfInput = $("#cpfInput").val();
        const cepInput = $("#cepInput").val();
        const enderecoInput = $("#enderecoInput").val();
        const emailInput = $("#emailInput").val();

        console.log(nomeInput)
        console.log(cpfInput)
        console.log(cepInput)
        console.log(enderecoInput)
        console.log(emailInput)

        form.reset()
    },
    invalidHandler: function (form, validator) {
        let numValidation = validator.numberOfInvalids();
        alert(`Por favor, preencha os campos para prosseguir com a compra!\n Campos restantes ${numValidation}`);
    }
})
