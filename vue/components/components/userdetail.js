Vue.component ('user-detail', {
    template: `
    <div>
   <p> ¡Hola {{firstname}} {{lastname}}!</p>
    </div>,`,
    props: ["firstname", "lastname"]
    })
