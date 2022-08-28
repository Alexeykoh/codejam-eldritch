const difficulties = [
  {
    id: 'very_easy',
    name: 'Очень низкая',
    hard: {toggle: false, priority: false},
    normal: {toggle: false, priority: false},
    easy: {toggle: true, priority: true},
  },
  {
    id: 'easy',
    name: 'Низкая',
    hard: {toggle: false, priority: false},
    normal: {toggle: true, priority: false},
    easy: {toggle: true, priority: false},
  },
  {
    id: 'normal',
    name: 'Средняя',
    hard: {toggle: true, priority: false},
    normal: {toggle: true, priority: false},
    easy: {toggle: true, priority: false},
  },
  {
    id: 'hard',
    name: 'Высокая',
    hard: {toggle: true, priority: false},
    normal: {toggle: true, priority: false},
    easy: {toggle: false, priority: false},
  },
  {
    id: 'very_hard',
    name: 'Очень высокая',
    hard: {toggle: true, priority: true},
    normal: {toggle: false, priority: false},
    easy: {toggle: false, priority: false},
  }
]

export default difficulties
