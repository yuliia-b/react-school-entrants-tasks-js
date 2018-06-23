/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  const setedArr2 = new Set(arr2);
  const joinArray = new Set([...arr1, ...arr2]);

  if((arr1.length !== setedArr2.size) || (arr1.length !== joinArray.size)) {
    return false;
  }

  return true;
}


export default haveSameItems;
