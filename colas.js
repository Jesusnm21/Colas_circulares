const maxSize = 5;
let front = -1;
let rear = -1;
let queue = new Array(maxSize);

function isEmpty() {
  return front === -1;
}

function isFull() {
  return (front === 0 && rear === maxSize - 1) || (rear === front - 1);
}

function enqueue() {
  if (isFull()) {
    alert("La cola está llena");
    return;
  }

  const element = prompt("Ingrese un elemento");
  if (isEmpty()) {
    front = 0;
    rear = 0;
  } else {
    rear = (rear + 1) % maxSize;
  }

  queue[rear] = element;
  displayQueue();

  document.getElementById(`item-${rear}`).style.backgroundColor = '#4CAF50';
  setTimeout(() => {
    document.getElementById(`item-${rear}`).style.backgroundColor = '';
  }, 500);
}

function dequeue() {
  if (isEmpty()) {
    alert("La cola está vacía");
    return;
  }

  document.getElementById(`item-${front}`).classList.add('hidden');

  if (front === rear) {
    front = -1;
    rear = -1;
  } else {
    front = (front + 1) % maxSize;
  }

  setTimeout(() => {
    queue[front - 1 < 0 ? maxSize - 1 : front - 1] = null;
    displayQueue();
    document.getElementById(`item-${front}`).classList.remove('hidden');
  }, 500);
}

function displayQueue() {
  const container = document.getElementById("queue-container");
  container.innerHTML = "";

  for (let i = 0; i < maxSize; i++) {
    const item = document.createElement("div");
    item.classList.add("queue-item");
    item.id = `item-${i}`;
    item.textContent = queue[i] || "";
    container.appendChild(item);
  }
}

displayQueue();
