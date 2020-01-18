// Maze Console Log
Test=()=> {
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        console.log(
            "Masukan Nilai Positif dan bernilai 4n-1"
        )
        return
    }
    for (let i = 0; i < nilai1; i++) {
        let output = ""
        for (let j = 0; j < nilai1; j++) {
            if (i == 0 || i == nilai1 - 1 || j == 0 || j == nilai1 - 1 || i % 2 == 0) {
                if (i % 4 == 0 && j == 1) {
                    output += " "
                } else if (i % 2 == 0 && i % 4 != 0 && j == nilai1 - 2) {
                    output += " "
                } else {
                    output += "@"
                }
            } else {
                output += " "
            }
        }
        console.log(output);
    }
}

Testdua = () => {
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        console.log(
            "Masukan Nilai Positif dan bernilai 4n-1"
        )
        return
    }
    let i, j
    const half = Math.floor(nilai1 / 2)
    /* Bagian Atas */

    for (i = 0; i <= half; i++) {
        let output = ""
        if (i % 2 == 0) {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 == 0 || (j < nilai1 - i && j > i + 1)) {
                    output += "@"
                } else {
                    output += " "
                }
            }
        } else {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 != 0 || (j < nilai1 - i && j > i + 1)) {
                    output += " "
                } else {
                    output += "@"
                }
            }
        }

        console.log(output)
    }

    /* Bagian Bawah */
    i = nilai1 - half
    for (i; i < nilai1; i++) {
        let output = ""
        if (i % 2 != 0) {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 == 0 && (j > i || j < nilai1 - i)) {
                    output += "@"
                } else {
                    output += " "
                }
            }
        } else {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 != 0 && (j > i || j < nilai1 - i)) {
                    output += " "
                } else {
                    output += "@"
                }
            }
        }
        console.log(output)
    }
}

Testtiga=()=>{
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        console.log(
            "Masukan Nilai Positif dan bernilai 4n-1"
        )
        return
    }
    let i, j
    const half = Math.floor(nilai1 / 2)
    /* Bagian Atas */

    for (i = 0; i <= half; i++) {
        let output = ""
        if (i % 2 == 0) {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 == 0 || (j < nilai1 - i && j > i + 1)) {
                    output += "@"
                } else {
                    output += " "
                }
            }
        } else {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 != 0 || (j < nilai1 - i && j > i + 1)) {
                    output += " "
                } else {
                    output += "@"
                }
            }
        }

        console.log(output)
    }

    /* Bagian Bawah */
    i = nilai1 - half
    for (i; i < nilai1; i++) {
        let output = ""
        if (i % 2 != 0) {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 != 0 || (j < i - 1 && j > nilai1 - i - 1)) {
                    output += " "
                } else {
                    output += "@"
                }
            }
        } else {
            for (j = 0; j < nilai1; j++) {
                if (j % 2 == 0 || (j < i - 1 && j > nilai1 - i - 1)) {
                    output += "@"
                } else {
                    output += " "
                }
            }
        }
        console.log(output)
    }
}

Testempat=()=>{
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        console.log(
            "Masukan Nilai Positif dan bernilai 4n-1"
        )
        return
    }
    for (let i = 0; i < nilai1; i++) {
        let output = ''
        for (let j = 0; j < nilai1; j++) {
            if (j % 4 === 0 && i === 1 && j !== 0 && j !== nilai1 - 1) {
                output += ' '
            } else if (i % 4 === 0) {
                if (j <= nilai1 - 3 && j >= nilai1 - i) {
                    output += '@'
                } else {
                    output += j % 2 === 0 ? '@' : ' '
                }
            } else if (i % 2 === 0 && i % 4 !== 0) {
                if (j < nilai1 && j >= nilai1 - i) {
                    output += '@'
                } else {
                    output += j % 2 === 0 ? '@' : ' '
                }
            } else {
                if (j <= nilai1 - 3 && j >= nilai1 - i) {
                    output += ' '
                } else {
                    output += j % 2 === 0 ? '@' : ' '
                }
            }
        }
        console.log(output)
    }
}

// HTML

Testa = () => {
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        document.getElementById("output1").innerHTML ="Masukan Nilai Positif dan bernilai 4n-1"
    }else{
        for (let i = 0; i < nilai1; i++) {
            let output = ""
            for (let j = 0; j < nilai1; j++) {
                if (i == 0 || i == nilai1 - 1 || j == 0 || j == nilai1 - 1 || i % 2 == 0) {
                    if (i % 4 == 0 && j == 1) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else if (i % 2 == 0 && i % 4 != 0 && j == nilai1 - 2) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else {
                        document.write("@");
                    }
                } else {
                    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                }
            }
            document.write("<br>")
        }
    }
}

Testb=()=>{
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        document.getElementById("output1").innerHTML = "Masukan Nilai Positif dan bernilai 4n-1"
    } else {
        let i, j
        const half = Math.floor(nilai1 / 2)
        /* Bagian Atas */

        for (i = 0; i <= half; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 == 0 || (j < nilai1 - i && j > i + 1)) {
                        document.write("@");
                    } else {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    }
                }
            } else {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 != 0 || (j < nilai1 - i && j > i + 1)) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else {
                        document.write("@");
                    }
                }
            }

            document.write("<br>")
        }

        /* Bagian Bawah */
        i = nilai1 - half
        for (i; i < nilai1; i++) {
            if (i % 2 != 0) {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 == 0 && (j > i || j < nilai1 - i)) {
                        document.write("@");
                    } else {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    }
                }
            } else {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 != 0 && (j > i || j < nilai1 - i)) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else {
                        document.write("@");
                    }
                }
            }
            document.write("<br>")
        }
    }
}


Testc=()=>{
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        document.getElementById("output1").innerHTML = "Masukan Nilai Positif dan bernilai 4n-1"
    } else {
        let i, j
        const half = Math.floor(nilai1 / 2)
        /* Bagian Atas */

        for (i = 0; i <= half; i++) {
            let output = ""
            if (i % 2 == 0) {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 == 0 || (j < nilai1 - i && j > i + 1)) {
                        document.write("@");
                    } else {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    }
                }
            } else {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 != 0 || (j < nilai1 - i && j > i + 1)) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else {
                        document.write("@");
                    }
                }
            }

           document.write("<br>")
        }

        /* Bagian Bawah */
        i = nilai1 - half
        for (i; i < nilai1; i++) {
            let output = ""
            if (i % 2 != 0) {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 != 0 || (j < i - 1 && j > nilai1 - i - 1)) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else {
                        document.write("@");
                    }
                }
            } else {
                for (j = 0; j < nilai1; j++) {
                    if (j % 2 == 0 || (j < i - 1 && j > nilai1 - i - 1)) {
                        document.write("@");
                    } else {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    }
                }
            }
            document.write("<br>")
        }
    }
}

Testd=()=>{
    let nilai1 = document.getElementById("nilai").value;
    if ((Number(nilai1) + 1) % 4 != 0 || nilai1 <= 0) {
        document.getElementById("output1").innerHTML = "Masukan Nilai Positif dan bernilai 4n-1"
    } else {
        for (let i = 0; i < nilai1; i++) {
            for (let j = 0; j < nilai1; j++) {
                if (j % 4 === 0 && i === 1 && j !== 0 && j !== nilai1 - 1) {
                    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                } else if (i % 4 === 0) {
                    if (j <= nilai1 - 3 && j >= nilai1 - i) {
                        document.write("@");
                    } else {
                        if (j % 2 === 0) {
                            document.write("@");
                        } else {
                            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                        }
                    }
                } else if (i % 2 === 0 && i % 4 !== 0) {
                    if (j < nilai1 && j >= nilai1 - i) {
                        document.write("@");
                    } else {
                        if (j % 2 === 0) {
                            document.write("@");
                        } else {
                            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                        }
                    }
                } else {
                    if (j <= nilai1 - 3 && j >= nilai1 - i) {
                        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                    } else {
                        if (j % 2 === 0) {
                            document.write("@");
                        } else {
                            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
                        }
                    }
                }
            }
            document.write("<br>")
        }
    }
}


// for (let i = 0; i < nilai1; i++) {
//     for (let j = 0; j < nilai1; j++) {
//         if (i > Math.floor(nilai1 / 2)) {
//             if (i % 2 === 0) {
//                 if (j < i - 1 && j > nilai1 - i - 1) {
//                     document.write("@");
//                 } else {
//                     // output += j % 2 === 0 ? '@' : ' '
//                     if (j % 2 === 0) {
//                         document.write("@");
//                     }else{
//                         document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//                     }
//                 }
//             } else {
//                 if (j < i - 1 && j > nilai1 - i - 1) {
//                     document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//                 } else {
//                     if (j % 2 === 0) {
//                         document.write("@");
//                     } else {
//                         document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//                     }
//                 }
//             }
//         } else {
//             if (i % 2 === 0) {
//                 if (j > i + 1 && j < nilai1 - i) {
//                     document.write("@");
//                 } else {
//                     if (j % 2 === 0) {
//                         document.write("@");
//                     } else {
//                         document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//                     }
//                 }
//             } else {
//                 if (j > i + 1 && j < nilai1 - i) {
//                     document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//                 } else {
//                     if (j % 2 === 0) {
//                         document.write("@");
//                     } else {
//                         document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
//                     }
//                 }
//             }
//         }
//     }
//     document.write("<br>")
// }

