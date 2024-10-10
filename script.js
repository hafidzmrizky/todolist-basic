const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan tugas
function addTodo() {
  const todoText = todoInput.value;
  
  if (todoText === '') {
    alert('Tugas tidak boleh kosong!');
    return;
  }
  
  // Buat elemen list baru
  const li = document.createElement('li');
  li.textContent = todoText;

  // Tambahkan event untuk menandai selesai
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Buat tombol hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Hapus';
  deleteBtn.style.backgroundColor = '#dc3545';
  deleteBtn.style.color = 'white';
  deleteBtn.style.border = 'none';
  deleteBtn.style.borderRadius = '4px';
  deleteBtn.style.padding = '5px';
  deleteBtn.style.cursor = 'pointer';

  deleteBtn.addEventListener('click', function() {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  
  // Tambahkan tugas ke dalam list
  todoList.appendChild(li);
  
  // Kosongkan input setelah menambahkan
  todoInput.value = '';
}

// Event ketika tombol tambah diklik
addBtn.addEventListener('click', addTodo);

// Event ketika menekan Enter pada input
todoInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
