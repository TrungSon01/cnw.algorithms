import React from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Hash,
  Lightbulb,
  List,
  Search,
  Target,
  X,
  Zap,
} from "lucide-react";

const toc = [
  {
    id: "introduction",
    label: "Array & Hashing là gì?",
  },
  {
    id: "array",
    label: "1. Array cơ bản",
  },
  {
    id: "hashing",
    label: "2. Hashing là gì?",
  },
  {
    id: "hash-set",
    label: "3. Hash Set",
  },
  {
    id: "hash-map",
    label: "4. Hash Map",
  },
  {
    id: "contains-duplicate",
    label: "5. Contains Duplicate",
  },
  {
    id: "valid-anagram",
    label: "6. Valid Anagram",
  },
  {
    id: "two-sum",
    label: "7. Two Sum",
  },
  {
    id: "summary",
    label: "8. Tổng kết",
  },
];

const containsDuplicateBruteForceCode = `#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize) {
for (int i = 0; i < numsSize; i++) {
for (int j = i + 1; j < numsSize; j++) {
if (nums[i] == nums[j]) {
return true;
}
}
}


return false;


}`;

const containsDuplicateSortCode = `#include <stdbool.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
int x = *(const int*)a;
int y = *(const int*)b;


if (x < y) return -1;
if (x > y) return 1;

return 0;


}

bool containsDuplicate(int* nums, int numsSize) {
qsort(
nums,
numsSize,
sizeof(int),
compare
);


for (int i = 1; i < numsSize; i++) {
    if (nums[i] == nums[i - 1]) {
        return true;
    }
}

return false;


}`;

const containsDuplicateHashCode = `#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

typedef struct {
int key;
bool used;
} SetEntry;

unsigned int hashInt(int key) {
uint32_t x = (uint32_t)key;


x ^= x >> 16;
x *= 0x7feb352d;
x ^= x >> 15;
x *= 0x846ca68b;
x ^= x >> 16;

return x;


}

bool setContains(
SetEntry* table,
int capacity,
int key
) {
unsigned int index =
hashInt(key) % capacity;


while (table[index].used) {
    if (table[index].key == key) {
        return true;
    }

    index = (index + 1) % capacity;
}

return false;


}

void setInsert(
SetEntry* table,
int capacity,
int key
) {
unsigned int index =
hashInt(key) % capacity;


while (table[index].used) {
    if (table[index].key == key) {
        return;
    }

    index = (index + 1) % capacity;
}

table[index].key = key;
table[index].used = true;


}

bool containsDuplicate(
int* nums,
int numsSize
) {
int capacity = numsSize * 2 + 1;


SetEntry* table =
    calloc(capacity, sizeof(SetEntry));

if (table == NULL) {
    return false;
}

for (int i = 0; i < numsSize; i++) {
    if (setContains(table, capacity, nums[i])) {
        free(table);
        return true;
    }

    setInsert(table, capacity, nums[i]);
}

free(table);

return false;


}`;

const validAnagramCode = `#include <stdbool.h>
#include <string.h>

bool isAnagram(
char* s,
char* t
) {
int sLength = strlen(s);
int tLength = strlen(t);


if (sLength != tLength) {
    return false;
}

int count[26] = {0};

for (int i = 0; i < sLength; i++) {
    count[s[i] - 'a']++;
    count[t[i] - 'a']--;
}

for (int i = 0; i < 26; i++) {
    if (count[i] != 0) {
        return false;
    }
}

return true;


}`;

const validAnagramBruteForceCode = `#include <stdbool.h>
#include <string.h>

bool isAnagram(
char* s,
char* t
) {
int sLength = strlen(s);
int tLength = strlen(t);


if (sLength != tLength) {
    return false;
}

// Cần sort hai chuỗi,
// sau đó mới so sánh.

// Time:
// O(n log n)

return false;


}`;

const twoSumBruteForceCode = `int* twoSum(
int* nums,
int numsSize,
int target,
int* returnSize
) {
int* result = malloc(2 * sizeof(int));


*returnSize = 0;

for (int i = 0; i < numsSize; i++) {
    for (int j = i + 1; j < numsSize; j++) {
        if (nums[i] + nums[j] == target) {
            result[0] = i;
            result[1] = j;

            *returnSize = 2;

            return result;
        }
    }
}

return result;


}`;

const twoSumHashCode = `#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

typedef struct {
int key;
int value;
bool used;
} MapEntry;

unsigned int hashInt(int key) {
uint32_t x = (uint32_t)key;


x ^= x >> 16;
x *= 0x7feb352d;
x ^= x >> 15;
x *= 0x846ca68b;
x ^= x >> 16;

return x;


}

bool mapGet(
MapEntry* table,
int capacity,
int key,
int* value
) {
unsigned int index =
hashInt(key) % capacity;


while (table[index].used) {
    if (table[index].key == key) {
        *value = table[index].value;
        return true;
    }

    index = (index + 1) % capacity;
}

return false;


}

void mapPut(
MapEntry* table,
int capacity,
int key,
int value
) {
unsigned int index =
hashInt(key) % capacity;


while (table[index].used) {
    if (table[index].key == key) {
        table[index].value = value;
        return;
    }

    index = (index + 1) % capacity;
}

table[index].key = key;
table[index].value = value;
table[index].used = true;


}

int* twoSum(
int* nums,
int numsSize,
int target,
int* returnSize
) {
int* result =
malloc(2 * sizeof(int));


*returnSize = 0;

int capacity = numsSize * 2 + 1;

MapEntry* table =
    calloc(capacity, sizeof(MapEntry));

if (table == NULL) {
    return result;
}

for (int i = 0; i < numsSize; i++) {
    int complement =
        target - nums[i];

    int previousIndex;

    if (mapGet(
            table,
            capacity,
            complement,
            &previousIndex
        )) {
        result[0] = previousIndex;
        result[1] = i;

        *returnSize = 2;

        free(table);

        return result;
    }

    mapPut(
        table,
        capacity,
        nums[i],
        i
    );
}

free(table);

return result;


}`;

function CodeBlock({ code, label = "C" }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      {" "}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
        {" "}
        <div className="flex items-center gap-2">
          {" "}
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />{" "}
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />{" "}
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />{" "}
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Code2 size={14} />
          {label}
        </div>
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function Complexity({ time, space, timeDescription, spaceDescription }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {" "}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        {" "}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {" "}
          <Clock3 size={15} />
          Time Complexity{" "}
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {time}
        </p>
        {timeDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {timeDescription}
          </p>
        )}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Hash size={15} />
          Space Complexity
        </div>

        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {space}
        </p>

        {spaceDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {spaceDescription}
          </p>
        )}
      </div>
    </div>
  );
}

function InfoBox({ type = "info", title, children }) {
  const config = {
    info: {
      wrapper: "border-sky-200 bg-sky-50",
      icon: "bg-sky-100 text-sky-700",
      Icon: Search,
    },
    tip: {
      wrapper: "border-amber-200 bg-amber-50",
      icon: "bg-amber-100 text-amber-700",
      Icon: Lightbulb,
    },
    important: {
      wrapper: "border-violet-200 bg-violet-50",
      icon: "bg-violet-100 text-violet-700",
      Icon: Zap,
    },
  };

  const current = config[type];
  const Icon = current.Icon;

  return (
    <div className={`my-6 rounded-2xl border p-5 ${current.wrapper}`}>
      {" "}
      <div className="flex gap-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${current.icon}`}
        >
          {" "}
          <Icon size={17} />{" "}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>

          <div className="mt-2 text-sm leading-7 text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8">
      {" "}
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {" "}
        <span>{number}</span> <span className="h-px w-8 bg-slate-200" />{" "}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ProblemHeader({ number, title, difficulty, description }) {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      {" "}
      <div className="flex flex-wrap items-start justify-between gap-4">
        {" "}
        <div>
          {" "}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            Problem {number}{" "}
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          {difficulty}
        </span>
      </div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function ArrayHashing() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}{" "}
      <section className="border-b border-slate-200 bg-white">
        {" "}
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {" "}
          <div className="max-w-4xl">
            {" "}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              {" "}
              <Code2 size={14} />
              NEETCODE · ARRAY & HASHING{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Array & Hashing
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Đây là chương đầu tiên và cũng là nền tảng của rất nhiều bài toán
              Data Structures & Algorithms. Chúng ta sẽ đi từ Array cơ bản, hiểu
              Hashing, Hash Set, Hash Map, sau đó áp dụng chúng vào đúng ba bài
              toán quan trọng: Contains Duplicate, Valid Anagram và Two Sum.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-600" />3 bài
                toán
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Hash size={16} />
                Hashing
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} />C
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <List size={14} />
              Nội dung
            </div>

            <nav className="max-h-[calc(100vh-130px)] space-y-1 overflow-y-auto pr-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs leading-5 text-slate-500 transition hover:bg-white hover:text-slate-900"
                >
                  <ChevronRight
                    size={12}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Array & Hashing là gì?"
              description="Hãy bắt đầu từ vấn đề chứ chưa cần nhớ bất kỳ thuật toán nào."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Khi giải một bài toán, chúng ta thường có một lượng dữ liệu đầu
              vào và cần tìm ra một thông tin nào đó. Vấn đề không chỉ là "làm
              được", mà còn là{" "}
              <strong>
                làm thế nào để không phải tìm đi tìm lại cùng một dữ liệu.
              </strong>
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <List size={20} />
                </div>

                <h3 className="mt-4 font-semibold">Array</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lưu nhiều giá trị theo thứ tự và truy cập chúng bằng index.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Hash size={20} />
                </div>

                <h3 className="mt-4 font-semibold">Hashing</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Giúp chúng ta tổ chức dữ liệu để kiểm tra và truy xuất nhanh.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 font-semibold">Tối ưu</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tránh các vòng lặp dư thừa và đưa lời giải từ O(n²) về O(n).
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Mục tiêu của chương này">
              Không phải học thuộc ba đoạn code. Mục tiêu là khi nhìn thấy một
              bài toán, bạn có thể tự hỏi:
              <strong> "Mình có cần lưu lại những gì đã thấy không?"</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Array */}
          <section id="array" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Array cơ bản"
              description="Mọi thứ bắt đầu từ cách chúng ta lưu dữ liệu."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Array là một tập hợp các phần tử được đặt theo thứ tự. Mỗi phần tử
              được xác định bởi một <strong>index</strong>.
            </p>

            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[560px]">
                {[
                  { index: 0, value: 3 },
                  { index: 1, value: 4 },
                  { index: 2, value: 5 },
                  { index: 3, value: 6 },
                ].map((item) => (
                  <div key={item.index} className="flex-1">
                    <div className="border border-slate-200 bg-slate-50 p-5 text-center font-mono text-lg font-bold">
                      {item.value}
                    </div>

                    <p className="mt-2 text-center font-mono text-xs text-slate-400">
                      index {item.index}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Index bắt đầu từ 0
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Phần tử đầu tiên nằm ở index <code>0</code>. Do đó:
            </p>

            <div className="my-5 flex flex-wrap gap-2">
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-sm text-white"
                >
                  nums[{index}]
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Truy cập phần tử
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu biết index, chúng ta có thể truy cập trực tiếp phần tử đó. Đây
              là lý do Array rất mạnh khi cần random access.
            </p>

            <CodeBlock
              code={`int nums[4] = {3, 4, 5, 6};


printf("%d", nums[2]);

// Output:
// 5`}
            />

            <Complexity
              time="O(1)"
              space="O(1)"
              timeDescription="Biết index thì truy cập trực tiếp."
              spaceDescription="Không cần thêm cấu trúc dữ liệu phụ."
            />

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Nhưng tìm kiếm thì sao?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu chúng ta không biết phần tử nằm ở đâu, cách đơn giản nhất là
              duyệt từng phần tử:
            </p>

            <CodeBlock
              code={`for (int i = 0; i < n; i++) {
if (nums[i] == target) {
    return i;
}


}`}
            />

            <p className="text-sm leading-7 text-slate-600">
              Đây là <strong>Linear Search</strong> và có complexity O(n).
            </p>

            <InfoBox type="tip" title="Từ đây xuất hiện một vấn đề">
              Nếu chúng ta phải kiểm tra đi kiểm tra lại xem một giá trị có tồn
              tại trong Array hay không, việc duyệt từ đầu mỗi lần có thể rất
              chậm.
              <br />
              <br />
              <strong>Hashing xuất hiện để giải quyết chính vấn đề này.</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Hashing */}
          <section id="hashing" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Hashing là gì?"
              description="Hiểu Hashing trước, rồi ba bài toán phía dưới sẽ trở nên rất dễ."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hãy tưởng tượng chúng ta có một danh sách rất lớn và muốn biết một
              giá trị có nằm trong đó hay không.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Với Array thông thường:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5 font-mono text-sm">
              10 → kiểm tra
              <br />
              20 → kiểm tra
              <br />
              30 → kiểm tra
              <br />
              40 → kiểm tra
              <br />
              ...
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu giá trị nằm gần cuối, chúng ta phải đi qua rất nhiều phần tử.
            </p>

            <h3 className="mt-8 text-xl font-bold">Hash function</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Hashing sử dụng một <strong>hash function</strong> để biến key
              thành một giá trị dùng để xác định vị trí trong hash table.
            </p>

            <div className="my-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-center sm:w-40">
                <p className="text-xs text-slate-400">KEY</p>

                <p className="mt-2 font-mono text-xl font-bold">42</p>
              </div>

              <ArrowRight className="rotate-90 text-slate-400 sm:rotate-0" />

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-center sm:w-40">
                <p className="text-xs text-slate-400">HASH</p>

                <p className="mt-2 font-mono text-xl font-bold">hash(42)</p>
              </div>

              <ArrowRight className="rotate-90 text-slate-400 sm:rotate-0" />

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-center sm:w-40">
                <p className="text-xs text-slate-400">INDEX</p>

                <p className="mt-2 font-mono text-xl font-bold">5</p>
              </div>
            </div>

            <InfoBox title="Mục tiêu của Hashing">
              Thay vì hỏi:
              <strong> "Tôi phải duyệt bao nhiêu phần tử?"</strong>
              <br />
              chúng ta muốn hỏi:
              <strong> "Giá trị này có trong bảng băm không?"</strong>
              <br />
              và thực hiện lookup gần như trực tiếp.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">Collision là gì?</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Hai key khác nhau đôi khi có thể cho cùng một vị trí hash. Điều
              này gọi là <strong>collision</strong>.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Có nhiều cách xử lý collision. Một cách phổ biến là{" "}
              <strong>open addressing</strong>, trong đó nếu vị trí hiện tại đã
              có dữ liệu thì chúng ta thử vị trí tiếp theo.
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[620px] gap-2">
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-xl border p-4 text-center ${
                      index === 5
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <p className="font-mono text-xs opacity-60">{index}</p>

                    <p className="mt-2 font-mono font-bold">
                      {index === 5 ? "42" : "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Hash Set */}
          <section id="hash-set" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Hash Set"
              description="Hash Set dùng khi điều chúng ta quan tâm chỉ là một giá trị có tồn tại hay không."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Array
                </p>

                <p className="mt-4 font-mono text-lg">[1, 2, 2, 3, 3]</p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Có thể chứa dữ liệu trùng nhau.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Hash Set
                </p>

                <p className="mt-4 font-mono text-lg">{"{1, 2, 3}"}</p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Đại diện cho một tập hợp các giá trị duy nhất.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Ba thao tác quan trọng</h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Insert", "Thêm giá trị"],
                ["Contains", "Kiểm tra tồn tại"],
                ["Delete", "Xóa giá trị"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-mono font-bold text-slate-900">{title}</p>

                  <p className="mt-2 text-sm text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <InfoBox type="tip" title="Keyword để nhận diện Hash Set">
              Khi đề bài hỏi:
              <br />
              <strong>“Đã xuất hiện chưa?”</strong>
              <br />
              <strong>“Có tồn tại không?”</strong>
              <br />
              <strong>“Có phần tử bị trùng không?”</strong>
              <br />
              hãy nghĩ ngay tới Set.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Hash Map */}
          <section id="hash-map" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Hash Map"
              description="Hash Map giống Set nhưng ngoài việc lưu key, chúng ta còn lưu thêm value."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hash Set có dạng:
            </p>

            <div className="my-4 rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-300">
              value
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hash Map có dạng:
            </p>

            <div className="my-4 rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-300">
              key → value
            </div>

            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Key
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Value
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý nghĩa
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      7
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      1
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Số 7 xuất hiện ở index 1
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      11
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      2
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Số 11 xuất hiện ở index 2
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoBox type="important" title="Đây là điểm mấu chốt của Two Sum">
              Two Sum không chỉ cần biết một số đã xuất hiện.
              <br />
              Nó cần biết:
              <strong> số đó xuất hiện ở đâu?</strong>
              <br />
              Vì vậy chúng ta cần lưu:
              <strong> number → index</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Contains Duplicate */}
          <section id="contains-duplicate" className="scroll-mt-24">
            <ProblemHeader
              number="01"
              title="Contains Duplicate"
              difficulty="Easy"
              description="Cho một mảng số nguyên, hãy trả về true nếu có bất kỳ giá trị nào xuất hiện nhiều hơn một lần. Nếu tất cả giá trị đều khác nhau, trả về false."
            />

            <h3 className="text-xl font-bold">Hiểu đề bài</h3>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Input</p>

              <p className="mt-2 font-mono text-lg">[1, 2, 3, 3]</p>

              <p className="mt-5 text-sm text-slate-500">Output</p>

              <p className="mt-2 font-mono text-lg font-bold text-emerald-600">
                true
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Vì số <strong>3</strong> xuất hiện hai lần.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold">Cách 1 — Brute Force</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ý tưởng đầu tiên rất tự nhiên:
              <strong> lấy từng cặp phần tử và so sánh.</strong>
            </p>

            <CodeBlock code={containsDuplicateBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">
              Với 5 phần tử, chúng ta kiểm tra nhiều cặp. Với 100.000 phần tử,
              số lần so sánh tăng rất nhanh.
            </p>

            <Complexity
              time="O(n²)"
              space="O(1)"
              timeDescription="Hai vòng lặp lồng nhau."
              spaceDescription="Không dùng cấu trúc dữ liệu phụ."
            />

            <InfoBox title="Vấn đề nằm ở đâu?">
              Chúng ta đang liên tục hỏi một câu giống nhau:
              <strong> “Phần tử này đã xuất hiện trước đó chưa?”</strong>
              <br />
              <br />
              Nhưng thay vì nhớ những gì đã thấy, brute force lại đi tìm lại từ
              đầu.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">Cách 2 — Sorting</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu sort mảng:
            </p>

            <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 font-mono text-sm">
              [1, 3, 3, 5, 8]
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Các phần tử trùng nhau sẽ đứng cạnh nhau. Vì vậy chỉ cần kiểm tra
              phần tử hiện tại với phần tử trước đó.
            </p>

            <CodeBlock code={containsDuplicateSortCode} />

            <Complexity
              time="O(n log n)"
              space="O(1)*"
              timeDescription="Phần lớn chi phí đến từ sorting."
              spaceDescription="Phụ thuộc vào implementation của qsort."
            />

            <h3 className="mt-8 text-xl font-bold">Cách 3 — Hash Set</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Đây là cách chúng ta thực sự muốn học từ bài này.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Duyệt từng số:
            </p>

            <div className="my-5 space-y-3">
              {[
                ["1", "Set chưa có 1", "Thêm 1"],
                ["2", "Set chưa có 2", "Thêm 2"],
                ["3", "Set chưa có 3", "Thêm 3"],
                ["3", "Set đã có 3", "Duplicate → true"],
              ].map(([number, action, result], index) => (
                <div
                  key={`${number}-${index}`}
                  className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-[60px_1fr_1fr]"
                >
                  <div className="font-mono font-bold">{number}</div>

                  <div className="text-sm text-slate-600">{action}</div>

                  <div className="text-sm font-semibold text-slate-900">
                    {result}
                  </div>
                </div>
              ))}
            </div>

            <CodeBlock code={containsDuplicateHashCode} />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi phần tử được xử lý một lần, lookup trung bình gần O(1)."
              spaceDescription="Có thể phải lưu tới n phần tử trong Set."
            />

            <InfoBox type="tip" title="Pattern cần nhớ">
              <strong>“Seen before?” → Hash Set.</strong>
              <br />
              <br />
              Đây là pattern đầu tiên bạn nên ghi nhớ trong Array & Hashing.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Valid Anagram */}
          <section id="valid-anagram" className="scroll-mt-24">
            <ProblemHeader
              number="02"
              title="Valid Anagram"
              difficulty="Easy"
              description="Cho hai chuỗi s và t. Kiểm tra xem chúng có phải là Anagram của nhau hay không — tức là chứa cùng các ký tự với cùng số lần xuất hiện, chỉ khác thứ tự."
            />

            <h3 className="text-xl font-bold">Anagram là gì?</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Ví dụ:</p>

            <div className="my-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  String S
                </p>

                <p className="mt-3 font-mono text-xl font-bold">racecar</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  String T
                </p>

                <p className="mt-3 font-mono text-xl font-bold">carrace</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Hai chuỗi này có cùng các ký tự với cùng frequency nên kết quả là
              true.
            </p>

            <h3 className="mt-8 text-xl font-bold">
              Điều gì thực sự quan trọng?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thứ tự không quan trọng.
              <br />
              Điều quan trọng là{" "}
              <strong>tần suất xuất hiện của từng ký tự</strong>.
            </p>

            <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["a", "2"],
                ["c", "2"],
                ["e", "1"],
                ["r", "2"],
              ].map(([char, count]) => (
                <div
                  key={char}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center"
                >
                  <p className="font-mono text-lg font-bold">{char}</p>

                  <p className="mt-1 text-xs text-slate-400">count = {count}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">Cách 1 — Sorting</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Sort cả hai chuỗi rồi so sánh.
            </p>

            <CodeBlock code={validAnagramBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">Ví dụ:</p>

            <div className="my-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white border border-slate-200 p-4 font-mono text-sm">
                racecar
                <br />
                ↓
                <br />
                aaccerr
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-4 font-mono text-sm">
                carrace
                <br />
                ↓
                <br />
                aaccerr
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Hai chuỗi giống nhau sau khi sort → Anagram.
            </p>

            <Complexity
              time="O(n log n)"
              space="O(n)"
              timeDescription="Sorting mỗi chuỗi."
              spaceDescription="Tùy implementation của sorting."
            />

            <h3 className="mt-8 text-xl font-bold">Cách 2 — Frequency Count</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Đề bài quy định s và t chỉ chứa{" "}
              <strong>lowercase English letters</strong>. Vì chỉ có 26 ký tự,
              chúng ta không cần một Hash Map phức tạp.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Chỉ cần một Array có 26 phần tử:
            </p>

            <div className="my-6 overflow-x-auto">
              <div className="flex min-w-[700px] gap-2">
                {Array.from({ length: 26 }, (_, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white font-mono text-xs"
                  >
                    {String.fromCharCode(97 + index)}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Với ký tự <code>a</code>:
            </p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm">
              'a' - 'a' = 0
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Với <code>b</code>:
            </p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm">
              'b' - 'a' = 1
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Và cứ như vậy cho đến <code>z</code>.
            </p>

            <h3 className="mt-8 text-xl font-bold">Tăng và giảm frequency</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thay vì tạo hai Hash Map, chúng ta có thể dùng một array duy nhất:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 font-mono text-sm leading-8 text-slate-300">
              <span className="text-emerald-300">s[i]</span>
              <span> → </span>
              <span className="text-sky-300">count++</span>
              <br />
              <span className="text-emerald-300">t[i]</span>
              <span> → </span>
              <span className="text-sky-300">count--</span>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu hai chuỗi là Anagram, tất cả các count cuối cùng phải bằng
              <code> 0</code>.
            </p>

            <CodeBlock code={validAnagramCode} />

            <Complexity
              time="O(n + m)"
              space="O(1)"
              timeDescription="Duyệt hai chuỗi rồi duyệt 26 ký tự."
              spaceDescription="Array luôn có kích thước cố định 26."
            />

            <InfoBox type="tip" title="Pattern cần nhớ">
              <strong>“Cần biết mỗi giá trị xuất hiện bao nhiêu lần?”</strong>
              <br />
              → Frequency Counting.
              <br />
              <br />
              Nếu miền giá trị nhỏ và cố định, Array thường đơn giản hơn Hash
              Map.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Two Sum */}
          <section id="two-sum" className="scroll-mt-24">
            <ProblemHeader
              number="03"
              title="Two Sum"
              difficulty="Easy"
              description="Cho một mảng số nguyên nums và target. Tìm hai index i và j sao cho nums[i] + nums[j] = target và i khác j."
            />

            <h3 className="text-xl font-bold">Ví dụ</h3>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                nums
              </div>

              <div className="flex min-w-[500px] gap-2">
                {[2, 7, 11, 15].map((number, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-xl border p-4 text-center ${
                      index === 0 || index === 1
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <p className="font-mono text-lg font-bold">{number}</p>

                    <p className="mt-1 text-xs opacity-60">index {index}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-sm text-slate-600">
                target = <strong>9</strong>
              </div>

              <div className="mt-2 flex items-center gap-2 font-mono text-sm">
                2 + 7 = 9
                <Check size={16} className="text-emerald-600" />
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Cách 1 — Brute Force</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thử mọi cặp số có thể.
            </p>

            <CodeBlock code={twoSumBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">
              Nếu có <code>n</code> phần tử thì trong trường hợp xấu nhất chúng
              ta phải thử gần như mọi cặp.
            </p>

            <Complexity
              time="O(n²)"
              space="O(1)"
              timeDescription="Hai vòng lặp."
              spaceDescription="Không dùng Hash Map."
            />

            <h3 className="mt-8 text-xl font-bold">
              Bây giờ hãy nhìn bài toán theo cách khác
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Giả sử chúng ta đang đứng ở:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              nums[i] = 2
            </div>

            <p className="text-sm leading-7 text-slate-600">Target là 9.</p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vậy số còn thiếu phải là:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-xl font-bold">
              9 - 2 = 7
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Đây chính là <strong>complement</strong>.
            </p>

            <div className="my-7 rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Công thức
              </p>

              <p className="mt-4 font-mono text-xl font-bold">
                complement = target - current
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Hash Map giải quyết vấn đề gì?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Chúng ta không cần tìm complement trong toàn bộ Array. Chỉ cần lưu
              những số đã nhìn thấy:
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="grid min-w-[520px] grid-cols-3 gap-2 text-sm">
                <div className="rounded-lg bg-slate-50 p-3 font-semibold">
                  Number
                </div>

                <div className="rounded-lg bg-slate-50 p-3 font-semibold">
                  Index
                </div>

                <div className="rounded-lg bg-slate-50 p-3 font-semibold">
                  Meaning
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  2
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  0
                </div>

                <div className="rounded-lg border border-slate-200 p-3 text-slate-600">
                  Đã thấy số 2
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  7
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  1
                </div>

                <div className="rounded-lg border border-slate-200 p-3 text-slate-600">
                  Đã thấy số 7
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">One-pass Hash Map</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Với mỗi phần tử:
            </p>

            <div className="my-6 space-y-3">
              {[
                "Tính complement = target - nums[i].",
                "Kiểm tra complement đã có trong Map chưa.",
                "Nếu có → tìm thấy đáp án.",
                "Nếu chưa → lưu nums[i] cùng index của nó.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <CodeBlock code={twoSumHashCode} />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi phần tử được duyệt một lần; lookup Hash Map trung bình gần O(1)."
              spaceDescription="Map có thể lưu tới n phần tử."
            />

            <InfoBox
              type="important"
              title="Tại sao phải check trước khi insert?"
            >
              Giả sử:
              <br />
              <br />
              <strong>nums = [5, 5]</strong>
              <br />
              <strong>target = 10</strong>
              <br />
              <br />
              Với phần tử thứ hai, complement của nó là 5. Phần tử 5 đầu tiên đã
              được lưu trong Map nên chúng ta tìm được hai index khác nhau.
              <br />
              <br />
              Nếu bạn insert phần tử hiện tại trước rồi mới kiểm tra, bạn rất dễ
              vô tình dùng cùng một phần tử hai lần.
            </InfoBox>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Target size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Pattern của Two Sum</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Khi đề bài yêu cầu tìm một phần tử "đi kèm" với phần tử hiện
                    tại để tạo ra một giá trị nào đó, hãy thử biến bài toán
                    thành:
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
                current
                <span className="mx-2 text-slate-500">→</span>
                required
                <span className="mx-2 text-slate-500">→</span>
                Hash Map lookup
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Tổng kết"
              description="Ba bài này thực chất đang dạy ba cách sử dụng Hashing khác nhau."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Bài toán
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Câu hỏi
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Pattern
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Complexity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Contains Duplicate
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Đã thấy giá trị này chưa?
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Hash Set
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(n)
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Valid Anagram
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Mỗi ký tự xuất hiện bao nhiêu lần?
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Frequency Count
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(n + m)
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold">Two Sum</td>

                    <td className="px-5 py-4 text-slate-600">
                      Phần tử còn thiếu là gì?
                    </td>

                    <td className="px-5 py-4 font-mono">Hash Map</td>

                    <td className="px-5 py-4 font-mono">O(n)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              3 câu hỏi nên tự hỏi khi gặp bài Array
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Search size={19} />
                </div>

                <p className="mt-4 font-semibold">Đã thấy chưa?</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nghĩ tới <strong>Hash Set</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Hash size={19} />
                </div>

                <p className="mt-4 font-semibold">Xuất hiện bao nhiêu lần?</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nghĩ tới <strong>Frequency Count</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Target size={19} />
                </div>

                <p className="mt-4 font-semibold">Cần tìm giá trị còn thiếu?</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nghĩ tới <strong>Hash Map</strong>.
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Điều cần nhớ nhất">
              Người mới thường cố tìm ra "thuật toán" ngay lập tức. Nhưng với
              những bài như ba bài trên, bước quan trọng hơn là nhận diện{" "}
              <strong>pattern của dữ liệu</strong>.
              <br />
              <br />
              <strong>Contains Duplicate</strong> → cần biết đã gặp chưa.
              <br />
              <strong>Valid Anagram</strong> → cần biết frequency.
              <br />
              <strong>Two Sum</strong> → cần biết giá trị và vị trí của thứ đã
              gặp.
              <br />
              <br />
              Một khi nhận diện được ba pattern này, rất nhiều bài Array &
              Hashing khác sẽ trở nên dễ hiểu hơn.
            </InfoBox>

            <div className="mt-10 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Next topic
                </p>

                <h3 className="mt-2 text-xl font-bold">Stack</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Tiếp tục với cấu trúc dữ liệu LIFO.
                </p>
              </div>

              <a
                href="/algorithms/stack"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Học Stack
                <ArrowRight size={16} />
              </a>
            </div>
          </section>
        </main>
      </div>
      {/* Mobile TOC */}
      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List size={14} />
            Nội dung
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Algorithm Learning Lab</span>
          <span>Array & Hashing</span>
        </div>
      </footer>
    </div>
  );
}
