var styles = ['Джаз', 'Блюз', '1231', '32121'];
styles.push('Рок-н-Ролл');
console.log (styles);
styles[Math.floor (styles.length / 2 ) ] = 'Классика';
console.log (styles);
styles.shift();
console.log (styles);
styles.unshift('Рэп', 'Регги');
console.log (styles);