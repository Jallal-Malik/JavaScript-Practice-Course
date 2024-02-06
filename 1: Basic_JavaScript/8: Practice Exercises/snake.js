let user = prompt("Enter Snake,Water or Gun")
let cpuI = Math.floor(Math.random() * 3);

let cpu = ["Snake", "Water", "Gun"][cpuI]

const match = (cpu, user) => {
    if(cpu === user) {
        return "Nobody, Match is Tied"
    }
    else if(cpu === "Snake" && user === "Water") {
        return "cpu"
    }
    else if(cpu === "Gun" && user === "Water") {
        return "user"
    }
    else if(cpu === "Snake" && user === "Gun") {
        return "user"
    }
    else if(cpu === "Gun" && user === "Snake") {
        return "cpu"
    }
    else if(cpu === "Water" && user === "Snake") {
        return "user"
    }
    else if(cpu === "Water" && user === "Gun") {
        return "cpu"
    }
}

let result = match(cpu, user)
document.write(`Cpu: ${cpu} and User: ${user} <br> The Winner is ${result}`)