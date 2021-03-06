document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	const ej01 = (years) => {
		return years * 365
	}
	const ej02 = (hours) => {
		return hours * 60 * 60
	}
	const ej03 = (arr = ['hola', 'mundo', 'desde', 'devplace']) => {
		return arr.join(' ')
	}
	const ej04 = (arr = [1, 2, 3, 4, 5]) => {
		const len = arr.length - 1
		const invert = []
		for (let i = len; i >= 0; i--) {
			invert.push(arr[i])
		}
		return invert
	}
	const ej05 = (arr = [1, 2, 3, 4, 5]) => {
		return arr.reduce((acc, cur) => [cur, ...acc], [])
	}
	const ej06 = (arr1 = [1, 2, 3], arr2 = [4, 5, 6]) => {
		return arr1.concat(arr2)
	}
	const ej07 = (arr = [1, 2, 3, 4], el = 0) => {
		return arr.includes(el)
	}
	const ej08 = (str = 'esto es una cadena') => {
		return str.charAt(str.length - 1) === 'b'
	}
	const ej09 = (str = 'esta cadena es de prueba') => {
		if (str.length < 6) {
			return 'La cadena debe ser de mas de 6 caracteres'
		}
		return `${str.slice(0, 3)}${str.slice(str.length - 3)}`
	}
	const ej10 = (str1 = 'una cadena', str2 = 'otra cadena') => {
		return `${str1.slice(2)} ${str2.slice(2)}`
	}
	const ej11 = (num1 = 20, num2 = 90) => {
		return Math.abs(num1 - 100) > Math.abs(num2 - 100) ? num2 : num1
	}

	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					const p1 = parseInt(prompt('Ingres?? tu edad en a??os: '))
					const days = `Tu edad en d??as: ${ej01(p1)}`
					return alert(days)
				case 'ej02':
					const p2 = parseInt(prompt('Ingres?? horas para convertir a segundos: '))
					const seconds = `${p2} horas son ${ej02(p2)} segundos`
					return alert(seconds)
				case 'ej03':
					return alert(ej03())
				case 'ej04':
					return alert(`Array invertido: ${ej04()}`)
				case 'ej05':
					return alert(`Array invertido: ${ej05()}`)
				case 'ej06':
					return alert(ej06())
				case 'ej07':
					return alert(ej07())
				case 'ej08':
					const p8 = prompt('Ingres?? una cadena: ')
					const res = ej08(p8) ? 'tiene' : 'no tiene'
					return alert(`La cadena '${res}' una 'b' al final de ella`)
				case 'ej09':
					let p9 = prompt('Ingres?? una cadena: ')
					while (p9.length < 6) {
						p9 = prompt('Ingres?? una cadena: ')
					}
					return alert(`Uni??n de las 3 primeras y ??ltimas letras de la cadena: ${ej09(p9)}`)
				case 'ej10':
					const p10_1 = prompt('Ingres?? cadena 1: ')
					const p10_2 = prompt('Ingres?? cadena 2: ')
					return alert(`Cadenas concatenadas: ${ej10(p10_1, p10_2)}`)
				case 'ej11':
					const p11_1 = parseInt(prompt('Ingres?? n??mero 1: '))
					const p11_2 = parseInt(prompt('Ingres?? n??mero 2: '))
					const val = ej11(p11_1, p11_2)
					return alert(`El valor mas cercano a 100 es: ${val}`)
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})

})
