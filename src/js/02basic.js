const BASIC_MATH_CONTRACT_ABI = 'basicMath.json';
let basicMath;

const deployContract = async () => {
    //load contract abi via AJAX
    $.getJSON(BASIC_MATH_CONTRACT_ABI, async contractABI => {
        // console.log(contractABI);
        try {
            // create contract prototype
            const contract = TruffleContract(contractABI);
            // set prototype's provider
            contract.setProvider(web3.currentProvider);
            // get contract instance
            basicMath = await contract.deployed();
            console.log(basicMath);
        } catch (error) {
            console.log(error);
        }
    });
};

$(async () => {
    try {
        await initWeb3();
        await deployContract();
    } catch (error) {
        console.log(error);
    }

    $('#addBtn').on('click', async e => {
        const p1 = parseFloat($('#param1').val())
        const p2 = parseFloat($('#param2').val())

        if (Number.isNaN(p1) || Number.isNaN(p2)) {
            alert('Enter valid number!')
            return;
        }
        else {
            // const sum = p1 + p2
            try {
                const sum = await basicMath.add(p1, p2)
                $('#result').text(sum);
            } catch (error) {
                console.log(error);
            }
        }
        $('#param1').val('')
        $('#param2').val('')
    });

    $('#subtBtn').on('click', async e => {
        const p1 = parseFloat($('#param1').val())
        const p2 = parseFloat($('#param2').val())

        if (Number.isNaN(p1) || Number.isNaN(p2)) {
            alert('Enter valid number!')
            return;
        }
        else {
            // const sum = p1 + p2
            try {
                const sum = await basicMath.subt(p1, p2);
                $('#result').text(sum);
            } catch (error) {
                console.log(error);
            }
        }
        $('#param1').val('')
        $('#param2').val('')
    });
    $('#multiplyBtn').on('click', async e => {
        const p1 = parseFloat($('#param1').val())
        const p2 = parseFloat($('#param2').val())

        if (Number.isNaN(p1) || Number.isNaN(p2)) {
            alert('Enter valid number!')
            return;
        }
        else {
            // const sum = p1 + p2
            try {
                const sum = await basicMath.multiply(p1, p2)
                $('#result').text(sum);
            } catch (error) {
                console.log(error);
            }
        }
        $('#param1').val('')
        $('#param2').val('')
    });
    $('#divideBtn').on('click', async e => {
        const p1 = parseFloat($('#param1').val())
        const p2 = parseFloat($('#param2').val())

        if (Number.isNaN(p1) || Number.isNaN(p2)) {
            alert('Enter valid number!')
            return;
        }
        else {
            // const sum = p1 + p2
            try {
                const sum = await basicMath.divide(p1, p2);
                $('#result').text(sum);
            } catch (error) {
                console.log(error);
            }
        }
        $('#param1').val('')
        $('#param2').val('')
    });
    //Excersise 14/2/2023
    $('#sumBtn').on('click', async e => {
        const p = $('#param3').val()
        // console.log(p);
        let arr_p;
        arr_p = p.split(',');
        console.log(arr_p);
        for(let i = 0; i < arr_p.length; i++){
            if(Number.isNaN(arr_p[i])){
                alert("Please enter valid number");
                return;
            }
        }
        try {
            const sum = await basicMath.sum(arr_p);
            $('#result2').text(sum);
        } catch (error) {
            console.log(error);
        }
        $('#param3').val('')
    });
    $('#minBtn').on('click', async e => {
        const p = $('#param3').val()
        // console.log(p);
        let arr_p;
        arr_p = p.split(',');
        console.log(arr_p);
        for(let i = 0; i < arr_p.length; i++){
            if(Number.isNaN(arr_p[i])){
                alert("Please enter valid number");
                return;
            }
        }
        try {
            const sum = await basicMath.min(arr_p);
            $('#result2').text(sum);
        } catch (error) {
            console.log(error);
        }
        $('#param3').val('')
    });
    $('#maxBtn').on('click', async e => {
        const p = $('#param3').val()
        // console.log(p);
        let arr_p;
        arr_p = p.split(',');
        console.log(arr_p);
        for(let i = 0; i < arr_p.length; i++){
            if(Number.isNaN(arr_p[i])){
                alert("Please enter valid number");
                return;
            }
        }
        try {
            const sum = await basicMath.max(arr_p);
            $('#result2').text(sum);
        } catch (error) {
            console.log(error);
        }
        $('#param3').val('')
    });
    $('#avgBtn').on('click', async e => {
        const p = $('#param3').val()
        // console.log(p);
        let arr_p;
        arr_p = p.split(',');
        console.log(arr_p);
        for(let i = 0; i < arr_p.length; i++){
            if(Number.isNaN(arr_p[i])){
                alert("Please enter valid number");
                return;
            }
        }
        try {
            const sum = await basicMath.avg(arr_p);
            $('#result2').text(sum);
        } catch (error) {
            console.log(error);
        }
        $('#param3').val('')
    });
});