const time = document.getElementById('time');
const datetime = document.getElementById('date-time')

setInterval(() => {
      const date = new Date();
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      const second = date.getSeconds().toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const weekday = date.toLocaleString('default', { weekday: 'long' });  
      time.innerHTML = `${hour} : ${minute} : ${second}`;
  
      datetime.innerHTML = `${weekday}, ${day} / ${month} / ${year}`;
      
}, 1000);