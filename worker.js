
onmessage = (eve) => {
	let d = eve.data;
	let a = new Uint8Array(d);

	// この書き方の場合は TypedArray がメインスレッドに返る
	postMessage(a);

	// この書き方の場合は ArrayBuffer がメインスレッドに返る
	postMessage(a.buffer);

	// a.buffer の記法で ArrayBuffer を返す場合はメモリがコピーされるのではなく参照を返している。
	// ただし、参照を返した場合は以降の worker 内での変更が一切できなくなる。
	// 上記 a から新しく TypedArray を生成し b とし、b をメインスレッドに返すようにすれば、a を
	// 引き続き参照及び編集できるがメモリを二倍消費することになる。
	// ただし、速度的には b を生成したとしても b.buffer として ArrayBuffer を返すようにすることで
	// シリアライズの回数を節約でき、b を直接返すよりは高速になる。
};

