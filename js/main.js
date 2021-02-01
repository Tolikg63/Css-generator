const rangeTl = document.getElementById('tlr'),
      rangeTr = document.getElementById('trr'),
      rangeBl = document.getElementById('blr'),
      rangeBr = document.getElementById('brr');

const resultTl = document.getElementById('result-tlr'),
      resultTr = document.getElementById('result-trr'),
      resultBl = document.getElementById('result-blr'),
      resultBr = document.getElementById('result-brr');

const input = document.querySelectorAll('.range');
const cube = document.querySelector('.block');
const btn = document.querySelector('.btn');
const totalResult = document.querySelector('.result');


const changeRadius = () => {
   resultTl.innerHTML = rangeTl.value;
   resultTr.innerHTML = rangeTr.value;
   resultBl.innerHTML = rangeBl.value;
   resultBr.innerHTML = rangeBr.value;

   cube.style.borderRadius = `${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px`;
}

for(node of input) {
   node.addEventListener('input', changeRadius);
   node.addEventListener('input', () => {
      totalResult.textContent = null;
   });
}

btn.addEventListener('click',() => {
   totalResult.textContent = `border-radius: ${rangeTl.value}px ${rangeTr.value}px ${rangeBr.value}px ${rangeBl.value}px;`;
});

