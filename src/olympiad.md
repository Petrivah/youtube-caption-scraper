# Полезные алгоритмы и приемы для олимпиад
1. Алгоритм Евклида для нахождения НОД
```cpp
long long gcd (long long a, long long b) {
	while (b) {
		a %= b;
		swap(a, b);
	}
	return a;
}
```
2. Алгоритм Евклида для нахождения НОК
```cpp
long long lcm (long long a, long long b) {
	return a / gcd (a, b) * b;
}
```
3. Функция Эйлера
```cpp
long long phi (long long n) {
	long long result = n;
	for (long long i=2; i*i<=n; ++i)
		if (n % i == 0) {
			while (n % i == 0)
				n /= i;
			result -= result / i;
		}
	if (n > 1)
		result -= result / n;
	return result;
}
```
4. Данные лучше хранить так
```cpp
vector<long long> a;
vector<long long> a(10); // 10 нулей
vector<long long> a(10, 2); // 10 2-ек
```
или так (если нужно иметь длинный массив с дефолтными числами)
```cpp
long long *a = new long long[n]
```
5. Удобно работать, меняя `long long` на что-то другое
```cpp
#define ll long long
// или
#define int long long
```
6. BFS
```cpp
// g - граф типа "2: [3, 1], 3:[2, 5] ..."
// n - число вершин
// s - стартовая точка

queue<int> q;
q.push (s);
vector<bool> used (n);
vector<long long> d (n), p (n);
used[s] = true;
p[s] = -1;
while (!q.empty()) {
	int v = q.front();
	q.pop();
	for (size_t i=0; i<g[v].size(); ++i) {
		int to = g[v][i];
		if (!used[to]) {
			used[to] = true;
			q.push (to);
			d[to] = d[v] + 1;
			p[to] = v;
		}
	}
}
```
7. DFS
```cpp
// g - граф типа "2: [3, 1], 3:[2, 5] ..."
// n - число вершин

vector<int> color; // цвет вершины (0, 1, или 2)

vector<long long> time_in, time_out; // "времена" захода и выхода из вершины
int dfs_timer = 0; // "таймер" для определения времён

void dfs (long long v) {
	time_in[v] = dfs_timer++;
	color[v] = 1;
	for (vector<long long>::iterator i=g[v].begin(); i!=g[v].end(); ++i)
		if (color[*i] == 0)
			dfs (*i);
	color[v] = 2;
	time_out[v] = dfs_timer++;
}
```
8. Ускорение кода (если не динамический ввод-вывод)
```cpp
ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
cout << "\n"; // вместо endl если не нужно сеи минутный вывод 
```
9. Полезно ставить границы массиву, постепенно их сужая
```cpp
// массив arr длинной n
sort(arr, arr + n);
if (a[0] < 0) left = -a[0];
if (a[n - 1] > 0) right = a[n - 1];
```
10. `for` может больше чем просто идти от 0 до n. Полезно использовать, если много скрытых случаев в задаче и если решение не получается сделать с первого раза:
```cpp
for (int i = n - 1; i >= 0; i--){
	a[i] += k 
	...
}

for(int i: a)
	cout << i << "\n"; // i - число a

for (int i = 0; i >= 0 && arr[i] > 0; i--)
	... // будь осторожен с выходом за границы!!! 
	
for (int i = 0; i < n && i < k; i++)
	...
	
for (int i = 0; i < n; i += 10)
	...

k = v.size();
for (int i = 0; i < k; i++)
	...
// быстрее работает, чем это
for (int i = 0; i < v.size(); i++)
	...
```
11.  Бин поиск
```cpp
long long binSearch(long long[] arr, long long key) {   
	long long left = -1; // left, right — левая и правая границы
    long long right = sizeof(arr) / sizeof(arr[0]);   
    while (left < right - 1){                
        m = (left + right) / 2;      
        if arr[m] < key
            left = m;
        else 
            right = m;     
	}           
    return right;
}
```
12. Мелочи
```cpp
i++;
// почти одно и тоже
++i;

ll a, b, c = 3434, d = 3434; // удобно
delete a; // удалить массив
v.clear(); // очистить вектор
vector<long long> v; // тоже очистить вектор
```

### P.S.
Во всех задачах обычно заложен какой-то алгоритм или идея, поэтому очень важно не только знать алгоритмы (DFS, BFS, БинПоиск итд), но и идеи из них такие, как: делить массивы на более простые части, делать предпроцессинг, находить левый и правый край массивов данных и правильно ходить по ним циклом, выискывать крайнии случаи итд 