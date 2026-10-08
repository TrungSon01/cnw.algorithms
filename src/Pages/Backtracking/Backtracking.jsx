import React from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Code2,
  GitBranch,
  GitMerge,
  Lightbulb,
  List,
  Network,
  RotateCcw,
  Search,
  Target,
  Undo2,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const toc = [
  {
    id: "introduction",
    label: "Backtracking là gì?",
  },
  {
    id: "recursion-review",
    label: "1. Ôn lại Recursion",
  },
  {
    id: "call-stack",
    label: "2. Call Stack",
  },
  {
    id: "backtracking-definition",
    label: "3. Backtracking là gì?",
  },
  {
    id: "choice",
    label: "4. Choice",
  },
  {
    id: "state",
    label: "5. State",
  },
  {
    id: "undo",
    label: "6. Undo",
  },
  {
    id: "dfs-vs-backtracking",
    label: "7. DFS và Backtracking",
  },
  {
    id: "template",
    label: "8. Template Backtracking",
  },
  {
    id: "recognize-basic",
    label: "9. Khi nào dùng Backtracking?",
  },
  {
    id: "complexity-basic",
    label: "10. Complexity",
  },
  {
    id: "fibonacci-problem",
    label: "11. Fibonacci",
  },
  {
    id: "fibonacci-thinking",
    label: "12. Tư duy Fibonacci",
  },
  {
    id: "fibonacci-tree",
    label: "13. Recursion Tree Fibonacci",
  },
  {
    id: "fibonacci-dry-run",
    label: "14. Dry Run Fibonacci",
  },
  {
    id: "fibonacci-code",
    label: "15. Code Fibonacci",
  },
  {
    id: "fibonacci-optimization",
    label: "16. Tối ưu Fibonacci",
  },
  {
    id: "subsets-problem",
    label: "17. Subsets",
  },
  {
    id: "subsets-observation",
    label: "18. Quan sát bài toán",
  },
  {
    id: "subsets-choice",
    label: "19. Choose / Not Choose",
  },
  {
    id: "subsets-state",
    label: "20. State của Backtracking",
  },
  {
    id: "subsets-tree",
    label: "21. Cây quyết định",
  },
  {
    id: "subsets-dry-run",
    label: "22. Dry Run Subsets",
  },
  {
    id: "subsets-code",
    label: "23. Code Subsets",
  },
  {
    id: "subsets-complexity",
    label: "24. Complexity Subsets",
  },
  {
    id: "edge-cases",
    label: "25. Edge Cases",
  },
  {
    id: "common-mistakes",
    label: "26. Lỗi thường gặp",
  },
  {
    id: "recognition",
    label: "27. Nhận diện Pattern",
  },
  {
    id: "summary",
    label: "28. Tổng kết",
  },
];

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

function InfoBox({ type = "info", title, children }) {
  const config = {
    info: {
      wrapper: "border-sky-200 bg-sky-50",
      icon: "bg-sky-100 text-sky-700",
      Icon: CircleAlert,
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
          <Target size={15} />
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

function StepCard({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      {" "}
      <div className="flex gap-4">
        {" "}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">
          {number}{" "}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <div className="mt-2 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionNode({ value, active = false }) {
  return (
    <div
      className={`flex h-12 min-w-12 items-center justify-center rounded-xl border-2 px-3 font-mono font-bold ${
        active
          ? "border-emerald-300 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      {value}{" "}
    </div>
  );
}

function SubsetTreeDiagram() {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      {" "}
      <div className="mx-auto min-w-[680px]">
        {" "}
        <div className="flex justify-center">
          {" "}
          <DecisionNode value="[]" active />{" "}
        </div>
        <div className="my-3 flex justify-center">
          <ArrowDown size={18} className="text-slate-400" />
        </div>
        <div className="flex justify-center gap-16">
          <div className="relative pt-4">
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-slate-300" />

            <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-slate-300" />

            <DecisionNode value="[1]" active />
          </div>

          <div className="relative pt-4">
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-slate-300" />

            <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-slate-300" />

            <DecisionNode value="[]" />
          </div>
        </div>
        <div className="my-6 grid grid-cols-4 justify-items-center gap-6">
          {["[1,2]", "[1]", "[2]", "[]"].map((value, index) => (
            <div
              key={`${value}-${index}`}
              className="flex flex-col items-center"
            >
              <DecisionNode value={value} active={index === 0 || index === 2} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm leading-6 text-slate-500">
          Mỗi Node của cây quyết định đại diện cho một trạng thái của subset.
          Mỗi phần tử tạo ra hai lựa chọn: <strong>chọn</strong> hoặc{" "}
          <strong>không chọn</strong>.
        </p>
      </div>
    </div>
  );
}

function ChooseUndoDiagram() {
  return (
    <div className="my-7 grid gap-4 md:grid-cols-3">
      {" "}
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
        {" "}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
          {" "}
          <GitBranch size={18} />{" "}
        </div>
        <h3 className="mt-4 font-bold text-slate-900">Choose</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Chọn một giá trị và đưa nó vào path hiện tại.
        </p>
        <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
          path.push(x)
        </p>
      </div>
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
          <ArrowDown size={18} />
        </div>

        <h3 className="mt-4 font-bold text-slate-900">Explore</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Gọi recursion để khám phá các lựa chọn tiếp theo.
        </p>

        <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
          backtrack(i + 1)
        </p>
      </div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <Undo2 size={18} />
        </div>

        <h3 className="mt-4 font-bold text-slate-900">Undo</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Xóa lựa chọn vừa thêm để thử nhánh khác.
        </p>

        <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
          path.pop()
        </p>
      </div>
    </div>
  );
}

const fibonacciCode = `int fib(int n) {
if (n <= 1) {
return n;
}


return fib(n - 1)
     + fib(n - 2);


}`;

const fibonacciTraceCode = `fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1)
│   │   │   └── fib(0)
│   │   └── fib(1)
│   └── fib(2)
│       ├── fib(1)
│       └── fib(0)
└── fib(3)
    ├── fib(2)
    │   ├── fib(1)
    │   └── fib(0)
    └── fib(1)`;

const fibonacciMemoCode = `int fibMemo(
int n,
int* memo
) {
if (n <= 1) {
return n;
}


if (memo[n] != -1) {
    return memo[n];
}

memo[n] =
    fibMemo(n - 1, memo)
  + fibMemo(n - 2, memo);

return memo[n];


}`;

const fibonacciIterativeCode = `int fib(int n) {
if (n <= 1) {
return n;
}


int prev2 = 0;
int prev1 = 1;

for (int i = 2; i <= n; i++) {
    int current = prev1 + prev2;

    prev2 = prev1;
    prev1 = current;
}

return prev1;


}`;

const subsetBacktrackCode = `void backtrack(
int* nums,
int numsSize,
int index,
int* path,
int pathSize,
int** result,
int* returnSize,
int* returnColumnSizes
) {
// Lưu subset hiện tại
result[*returnSize] =
malloc(sizeof(int) * pathSize);


for (int i = 0; i < pathSize; i++) {
    result[*returnSize][i] = path[i];
}

returnColumnSizes[*returnSize] =
    pathSize;

(*returnSize)++;

if (index == numsSize) {
    return;
}

for (int i = index; i < numsSize; i++) {
    // Choose
    path[pathSize] = nums[i];

    // Explore
    backtrack(
        nums,
        numsSize,
        i + 1,
        path,
        pathSize + 1,
        result,
        returnSize,
        returnColumnSizes
    );

    // Undo
    pathSize;
}


}`;

const subsetsCode = `void backtrack(
int* nums,
int numsSize,
int index,
int* path,
int pathSize,
int** result,
int* returnSize,
int* returnColumnSizes
) {
result[*returnSize] =
malloc(sizeof(int) * pathSize);


for (int i = 0; i < pathSize; i++) {
    result[*returnSize][i] = path[i];
}

returnColumnSizes[*returnSize] =
    pathSize;

(*returnSize)++;

for (int i = index; i < numsSize; i++) {
    path[pathSize] = nums[i];

    backtrack(
        nums,
        numsSize,
        i + 1,
        path,
        pathSize + 1,
        result,
        returnSize,
        returnColumnSizes
    );
}


}

int** subsets(
int* nums,
int numsSize,
int* returnSize,
int** returnColumnSizes
) {
int total = 1 << numsSize;


int** result =
    malloc(sizeof(int*) * total);

*returnColumnSizes =
    malloc(sizeof(int) * total);

int* path =
    malloc(sizeof(int) * numsSize);

*returnSize = 0;

backtrack(
    nums,
    numsSize,
    0,
    path,
    0,
    result,
    returnSize,
    *returnColumnSizes
);

free(path);

return result;


}`;

const subsetsDecisionCode = `void backtrack(
int index
) {
if (index == numsSize) {
addCurrentSubset();
return;
}


// Không chọn nums[index]
backtrack(index + 1);

// Chọn nums[index]
path[pathSize++] = nums[index];

backtrack(index + 1);

// Undo
pathSize--;


}`;

const validSubsetCode = `nums = [1, 2, 3]

[]

[1]
[2]
[3]

[1,2]
[1,3]
[2,3]

[1,2,3]`;

const emptySubsetCode = `nums = []

Output:
[[]]`;

export default function Backtracking() {
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
              <GitBranch size={14} />
              NEETCODE · BACKTRACKING{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Backtracking
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Backtracking là kỹ thuật dùng{" "}
              <strong>Recursion + Decision + Undo</strong> để khám phá nhiều khả
              năng. Bài này đi từ Recursion, hiểu cách cây quyết định hoạt động,
              sau đó dùng Fibonacci làm nền tảng và giải bài{" "}
              <strong>Subsets</strong> bằng Backtracking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <GitBranch size={16} />
                Decision Tree
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <RotateCcw size={16} />
                Recursion
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Undo2 size={16} />
                Backtrack
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Network size={16} />
                DFS
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
              title="Backtracking là gì?"
              description="Hãy bắt đầu bằng cách hiểu bản chất của việc thử nhiều khả năng."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Trong nhiều bài toán, chúng ta không biết ngay đáp án cuối cùng.
              Thay vào đó có thể có rất nhiều lựa chọn. Ta thử một lựa chọn,
              tiếp tục đi sâu, nếu phát hiện lựa chọn đó không phù hợp thì quay
              lại trạng thái trước và thử lựa chọn khác.
            </p>

            <div className="my-7 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-300 bg-slate-50 font-mono font-bold">
                  Start
                </div>

                <ArrowDown size={18} className="my-3 text-slate-400" />

                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 font-mono text-sm font-bold text-sky-800">
                      Choice A
                    </div>

                    <ArrowDown size={17} className="my-2 text-slate-400" />

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Explore
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 font-mono text-sm font-bold text-violet-800">
                      Choice B
                    </div>

                    <ArrowDown size={17} className="my-2 text-slate-400" />

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="my-4 flex items-center gap-2">
                  <Undo2 size={18} className="text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">
                    Undo để quay lại trạng thái trước
                  </span>
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Định nghĩa đơn giản nhất">
              <strong>
                Backtracking là quá trình thử một lựa chọn, đi sâu bằng
                recursion, rồi hoàn tác lựa chọn đó để thử nhánh khác.
              </strong>
            </InfoBox>

            <p className="text-sm leading-7 text-slate-600">
              Công thức rất quan trọng:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg font-bold text-white">
              Choose → Explore → Undo
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recursion Review */}
          <section id="recursion-review" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Ôn lại Recursion"
              description="Backtracking gần như luôn dựa trên recursion, vì vậy phải hiểu recursion trước."
            />

            <p className="text-sm leading-7 text-slate-600">
              Recursion là khi một function gọi lại chính nó để giải một bài
              toán nhỏ hơn.
            </p>

            <CodeBlock
              code={`void countdown(int n) {
if (n == 0) {
    return;
}

printf("%d ", n);

countdown(n - 1);


}`}
            />

            <p className="text-sm leading-7 text-slate-600">
              Với <code>countdown(3)</code>:
            </p>

            <div className="my-6 space-y-3">
              <StepCard number="01" title="countdown(3)">
                In 3 rồi gọi countdown(2).
              </StepCard>

              <StepCard number="02" title="countdown(2)">
                In 2 rồi gọi countdown(1).
              </StepCard>

              <StepCard number="03" title="countdown(1)">
                In 1 rồi gọi countdown(0).
              </StepCard>

              <StepCard number="04" title="countdown(0)">
                Chạm Base Case và return.
              </StepCard>
            </div>

            <InfoBox type="tip" title="Ba thành phần của Recursion">
              <strong>Base Case</strong> để dừng.
              <br />
              <strong>Recursive Call</strong> để đi vào bài toán nhỏ hơn.
              <br />
              <strong>Return</strong> để quay trở lại tầng trước.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Call Stack */}
          <section id="call-stack" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Call Stack"
              description="Muốn hiểu Backtracking phải hiểu chuyện gì xảy ra khi recursion đi sâu rồi quay lại."
            />

            <p className="text-sm leading-7 text-slate-600">
              Mỗi lần function gọi chính nó, một stack frame mới được tạo. Khi
              function con kết thúc, chương trình quay lại frame trước đó.
            </p>

            <div className="my-7 space-y-3">
              {[
                ["Frame 1", "backtrack(0)"],
                ["Frame 2", "backtrack(1)"],
                ["Frame 3", "backtrack(2)"],
                ["Return", "quay lại backtrack(1)"],
                ["Continue", "thử lựa chọn khác"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="font-semibold text-slate-900">{title}</span>

                  <span className="font-mono text-sm text-slate-500">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <InfoBox type="important" title="Backtracking chính là quay lại">
              Từ "backtrack" có thể hiểu rất trực tiếp:
              <br />
              <br />
              đi sâu → thử → return → quay lại trạng thái cũ → thử hướng khác.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Definition */}
          <section id="backtracking-definition" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Backtracking là gì?"
              description="Backtracking biến một bài toán nhiều lựa chọn thành một cây quyết định."
            />

            <p className="text-sm leading-7 text-slate-600">
              Giả sử tại một trạng thái ta có 3 lựa chọn:
            </p>

            <div className="my-6 flex justify-center">
              <div className="flex gap-3">
                {["A", "B", "C"].map((value) => (
                  <div
                    key={value}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">Ta có thể:</p>

            <div className="my-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">Chọn A</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Đi xuống toàn bộ các lựa chọn phía sau A.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">Chọn B</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Quay lại rồi thử B.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">Chọn C</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Cuối cùng thử C.
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Điểm cốt lõi">
              Không phải cứ dùng recursion là Backtracking.
              <br />
              <br />
              Backtracking phải có{" "}
              <strong>
                nhiều lựa chọn và quá trình quay lại để thử lựa chọn khác
              </strong>
              .
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Choice */}
          <section id="choice" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Choice"
              description="Choice là lựa chọn mà chúng ta đang thử tại một trạng thái."
            />

            <p className="text-sm leading-7 text-slate-600">
              Với bài Subsets, tại mỗi phần tử chúng ta có hai lựa chọn:
            </p>

            <div className="my-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Check size={18} />
                  Choose
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Đưa phần tử vào subset hiện tại.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <ArrowRight size={18} />
                  Skip
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Không đưa phần tử vào subset hiện tại.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Đây chính là lý do bài Subsets có:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              2 choices / element
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* State */}
          <section id="state" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="State"
              description="State là toàn bộ thông tin cần thiết để biết chúng ta đang ở đâu trong quá trình tìm kiếm."
            />

            <p className="text-sm leading-7 text-slate-600">
              Trong các bài Backtracking, state thường gồm:
            </p>

            <div className="my-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Index
                </p>

                <p className="mt-3 font-mono text-xl font-bold">i</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Đang xét phần tử nào.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Path
                </p>

                <p className="mt-3 font-mono text-xl font-bold">[]</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Lựa chọn hiện tại.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Result
                </p>

                <p className="mt-3 font-mono text-xl font-bold">ans</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Các lời giải hoàn chỉnh.
                </p>
              </div>
            </div>

            <InfoBox type="tip" title="Một cách nghĩ rất hữu ích">
              <strong>State</strong> trả lời câu hỏi:
              <br />
              <br />
              "Nếu dừng recursion ngay lúc này, chúng ta đang có lựa chọn gì?"
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Undo */}
          <section id="undo" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Undo"
              description="Undo là phần biến một DFS bình thường thành Backtracking."
            />

            <p className="text-sm leading-7 text-slate-600">Giả sử:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              path = [1, 2]
            </div>

            <p className="text-sm leading-7 text-slate-600">Chúng ta chọn 3:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              path = [1, 2, 3]
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau khi khám phá toàn bộ nhánh bắt đầu bằng 3, muốn thử một nhánh
              khác thì phải quay lại:
            </p>

            <div className="my-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center font-mono text-lg font-bold text-amber-800">
              path = [1, 2]
            </div>

            <ChooseUndoDiagram />

            <InfoBox type="important" title="Nếu quên Undo">
              State của nhánh trước sẽ bị "dính" sang nhánh sau.
              <br />
              <br />
              Đây là một trong những lỗi quan trọng nhất khi viết Backtracking.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* DFS vs Backtracking */}
          <section id="dfs-vs-backtracking" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="DFS và Backtracking khác nhau thế nào?"
              description="Hai khái niệm có liên quan rất chặt, nhưng không hoàn toàn giống nhau."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Đặc điểm
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      DFS
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Backtracking
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Đi sâu trước", "Có", "Có"],
                    ["Recursion", "Có thể", "Rất thường dùng"],
                    ["Nhiều lựa chọn", "Không bắt buộc", "Thường có"],
                    ["Undo state", "Không bắt buộc", "Rất quan trọng"],
                    ["Decision tree", "Có thể có", "Rất thường có"],
                  ].map(([feature, dfs, backtracking]) => (
                    <tr key={feature}>
                      <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                        {feature}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {dfs}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {backtracking}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox type="tip" title="Có thể nhớ như thế này">
              <strong>DFS</strong> = đi sâu.
              <br />
              <strong>Backtracking</strong> = đi sâu + thay đổi state + quay lại
              để thử lựa chọn khác.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Template */}
          <section id="template" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Template Backtracking"
              description="Đây là skeleton bạn nên tập viết từ trí nhớ."
            />

            <CodeBlock
              code={`void backtrack(State state) {
if (isComplete(state)) {
    saveAnswer(state);
    return;
}

for (each choice) {

    // Choose
    apply(choice);

    // Explore
    backtrack(nextState);

    // Undo
    undo(choice);
}


}`}
            />

            <div className="my-6 grid gap-4 md:grid-cols-3">
              <StepCard number="01" title="Choose">
                Thay đổi state để chọn một khả năng.
              </StepCard>

              <StepCard number="02" title="Explore">
                Gọi recursion để khám phá khả năng đó.
              </StepCard>

              <StepCard number="03" title="Undo">
                Hoàn tác state để thử khả năng tiếp theo.
              </StepCard>
            </div>

            <InfoBox type="important" title="Đừng học thuộc variable">
              Tên biến có thể là <code>path</code>, <code>current</code>,{" "}
              <code>state</code>, <code>board</code>...
              <br />
              <br />
              Thứ cần nhớ là thứ tự:
              <strong> Choose → Explore → Undo</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition Basic */}
          <section id="recognize-basic" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Khi nào dùng Backtracking?"
              description="Nhận diện đúng pattern quan trọng hơn việc thuộc template."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                [
                  "All possible",
                  "Đề yêu cầu tất cả các khả năng / tất cả solution.",
                ],
                ["Generate", "Tạo permutations, combinations, subsets."],
                ["Choose", "Chọn hoặc không chọn từng phần tử."],
                ["Grid / Board", "Tìm đường bằng DFS và phải undo trạng thái."],
                [
                  "Constraint",
                  "Chỉ tiếp tục nếu lựa chọn hiện tại vẫn hợp lệ.",
                ],
                [
                  "Search all",
                  "Có nhiều nhánh cần thử thay vì một đường duy nhất.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <Search size={18} className="text-slate-500" />

                    <h3 className="font-semibold">{title}</h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <InfoBox type="tip" title="Keyword rất mạnh">
              Khi đề có các cụm như:
              <br />
              <br />
              <strong>
                all possible · all combinations · all subsets · generate ·
                enumerate · every valid solution
              </strong>
              <br />
              <br />
              hãy nghĩ tới Backtracking.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity Basic */}
          <section id="complexity-basic" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Complexity của Backtracking"
              description="Backtracking thường có số lượng trạng thái rất lớn."
            />

            <p className="text-sm leading-7 text-slate-600">
              Nếu mỗi bước có 2 lựa chọn và có n bước, số trạng thái có thể lên
              tới:
            </p>

            <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-2xl font-bold text-white">
              2ⁿ
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu mỗi bước có k lựa chọn:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              kⁿ
            </div>

            <InfoBox type="important" title="Vì sao Backtracking thường chậm?">
              Vì nó thực sự phải khám phá nhiều khả năng.
              <br />
              <br />
              Tuy nhiên chúng ta có thể dùng <strong>pruning</strong> để cắt
              những nhánh chắc chắn không thể tạo ra đáp án.
            </InfoBox>

            <div className="my-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="font-mono text-2xl font-bold">Search Space</div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Toàn bộ khả năng có thể thử.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="font-mono text-2xl font-bold text-emerald-800">
                  Pruning
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cắt những nhánh không còn khả năng tạo solution.
                </p>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Problem */}
          <section id="fibonacci-problem" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Fibonacci"
              description="Fibonacci không phải bài Backtracking, nhưng là bài rất tốt để xây nền recursion trước khi bước vào Backtracking."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Fibonacci Number
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho số nguyên <code>n</code>, trả về số Fibonacci thứ n.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-8">
                F(0) = 0
                <br />
                F(1) = 1
                <br />
                F(n) = F(n - 1) + F(n - 2)
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[0, 1, 1, 2, 3, 5, 8, 13].map((value, index) => (
                  <div
                    key={`${value}-${index}`}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <div className="text-xs text-slate-400">F({index})</div>

                    <div className="mt-1 font-mono text-lg font-bold">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <InfoBox type="tip" title="Tại sao học Fibonacci ở đây?">
              Fibonacci giúp bạn hiểu rất rõ{" "}
              <strong>Base Case → Recursive Call → Return</strong>.
              <br />
              <br />
              Sau khi hiểu recursion tree, việc chuyển sang Decision Tree của
              Backtracking sẽ tự nhiên hơn.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Thinking */}
          <section id="fibonacci-thinking" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Tư duy Fibonacci"
              description="Đừng bắt đầu bằng code. Hãy viết công thức trước."
            />

            <p className="text-sm leading-7 text-slate-600">Với n lớn hơn 1:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl font-bold text-white">
              fib(n) = fib(n - 1) + fib(n - 2)
            </div>

            <div className="space-y-4">
              <StepCard number="01" title="Base Case">
                Nếu <code>n</code> là 0 hoặc 1, trả trực tiếp <code>n</code>.
              </StepCard>

              <StepCard number="02" title="Chia bài toán">
                Fibonacci n được chia thành hai bài nhỏ hơn.
              </StepCard>

              <StepCard number="03" title="Recursive Call">
                Tính <code>fib(n - 1)</code> và <code>fib(n - 2)</code>.
              </StepCard>

              <StepCard number="04" title="Combine">
                Cộng hai kết quả.
              </StepCard>
            </div>

            <InfoBox type="important" title="Đây vẫn chưa phải Backtracking">
              Fibonacci không có thao tác kiểu "chọn một state, undo state rồi
              thử lựa chọn khác".
              <br />
              <br />
              Đây chủ yếu là <strong>Recursion / Dynamic Programming</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Tree */}
          <section id="fibonacci-tree" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Recursion Tree của Fibonacci"
              description="Đây là lúc thấy rõ một lời gọi recursion có thể sinh ra nhiều lời gọi con."
            />

            <CodeBlock code={fibonacciTraceCode} label="C · Recursion Tree" />

            <p className="text-sm leading-7 text-slate-600">
              Với <code>fib(5)</code>, nhiều lời gọi bị lặp lại:
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono font-bold">fib(3)</p>

                <p className="mt-2 text-sm text-slate-500">
                  Xuất hiện nhiều lần.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono font-bold">fib(2)</p>

                <p className="mt-2 text-sm text-slate-500">Cũng bị tính lại.</p>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="font-mono font-bold text-red-700">
                  Repeated Work
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Đây là nguyên nhân khiến cách ngây thơ rất chậm.
                </p>
              </div>
            </div>

            <InfoBox type="tip" title="Liên hệ với Backtracking">
              Fibonacci cho ta thấy một node trong recursion có thể sinh ra
              nhiều nhánh con. Backtracking cũng xây một cây lựa chọn, nhưng
              thêm state và Undo.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Dry Run */}
          <section id="fibonacci-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Dry Run Fibonacci"
              description="Tính F(5) từ dưới lên trong quá trình recursion quay trở lại."
            />

            <div className="space-y-4">
              <StepCard number="01" title="fib(5)">
                Chưa biết → phải tính fib(4) + fib(3).
              </StepCard>

              <StepCard number="02" title="fib(2)">
                Tiếp tục chia thành fib(1) + fib(0).
              </StepCard>

              <StepCard number="03" title="Base Case">
                fib(1) = 1 và fib(0) = 0.
              </StepCard>

              <StepCard number="04" title="Return">
                fib(2) = 1 + 0 = 1.
              </StepCard>

              <StepCard number="05" title="Quay trở lại">
                Những giá trị được return sẽ được dùng để tính Node cha.
              </StepCard>
            </div>

            <div className="my-7 rounded-3xl bg-slate-950 p-6 font-mono text-sm leading-8 text-white">
              fib(0) → 0
              <br />
              fib(1) → 1
              <br />
              fib(2) → 1
              <br />
              fib(3) → 2
              <br />
              fib(4) → 3
              <br />
              fib(5) → 5
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Code */}
          <section id="fibonacci-code" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Code Fibonacci"
              description="Implementation recursion cơ bản."
            />

            <CodeBlock code={fibonacciCode} />

            <Complexity
              time="O(2ⁿ)"
              space="O(n)"
              timeDescription="Nhiều subtree bị tính lại."
              spaceDescription="Call stack sâu tối đa n."
            />

            <InfoBox type="important" title="Code đúng nhưng chưa tốt">
              Đây là implementation rất tốt để học recursion, nhưng không phải
              implementation tối ưu về performance.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Optimization */}
          <section id="fibonacci-optimization" className="scroll-mt-24">
            <SectionTitle
              number="16"
              title="Tối ưu Fibonacci"
              description="Fibonacci cho thấy vì sao chúng ta cần lưu kết quả đã tính."
            />

            <h3 className="text-xl font-bold">Memoization</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu đã tính fib(5) rồi thì không cần tính lại fib(5) từ đầu. Chúng
              ta lưu kết quả vào array.
            </p>

            <CodeBlock code={fibonacciMemoCode} label="C · Memoization" />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi fib(i) được tính tối đa một lần."
              spaceDescription="Memo array + recursion stack."
            />

            <h3 className="mt-8 text-xl font-bold">Iterative</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu chỉ cần số Fibonacci, ta thậm chí không cần recursion:
            </p>

            <CodeBlock code={fibonacciIterativeCode} label="C · Iterative" />

            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="Duyệt từ 2 tới n."
              spaceDescription="Chỉ giữ hai giá trị trước."
            />

            <InfoBox type="tip" title="Bài học từ Fibonacci">
              Recursion giúp mô tả bài toán tự nhiên.
              <br />
              <br />
              Nhưng sau đó phải đặt câu hỏi:
              <strong> "Có công việc nào đang bị lặp lại không?"</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Problem */}
          <section id="subsets-problem" className="scroll-mt-24">
            <SectionTitle
              number="17"
              title="Subsets"
              description="Bây giờ mới bước vào bài Backtracking kinh điển."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Subsets
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một array <code>nums</code> gồm các số nguyên{" "}
                <strong>unique</strong>. Trả về tất cả các subset có thể tạo
                thành.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Kết quả không được chứa duplicate subset và có thể trả về theo
                bất kỳ thứ tự nào.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-8">
                nums = [1, 2, 3]
                <br />
                <br />
                Output =
                <br />
                [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm leading-7 text-slate-600">Với:</p>

                <p className="mt-3 font-mono text-lg font-bold">nums = [7]</p>

                <p className="mt-3 font-mono text-sm text-slate-600">
                  Output = [[], [7]]
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Câu hỏi chính">
              Với mỗi phần tử, chúng ta cần quyết định:
              <br />
              <br />
              <strong>
                "Có đưa phần tử này vào subset hiện tại hay không?"
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Observation */}
          <section id="subsets-observation" className="scroll-mt-24">
            <SectionTitle
              number="18"
              title="Quan sát bài toán"
              description="Chỉ cần nhìn mỗi phần tử như một quyết định."
            />

            <p className="text-sm leading-7 text-slate-600">Với:</p>

            <div className="my-5 flex justify-center gap-3">
              {[1, 2, 3].map((value) => (
                <div
                  key={value}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                >
                  {value}
                </div>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">Với số 1:</p>

            <div className="my-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <Check size={18} className="text-emerald-600" />

                <h3 className="mt-3 font-bold">Chọn 1</h3>

                <p className="mt-2 font-mono text-sm">[1]</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <ArrowRight size={18} className="text-slate-500" />

                <h3 className="mt-3 font-bold">Không chọn 1</h3>

                <p className="mt-2 font-mono text-sm">[]</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Với số 2, hai trạng thái trước lại tiếp tục tách thành hai lựa
              chọn:
            </p>

            <SubsetTreeDiagram />

            <InfoBox type="tip" title="Nhìn ra ngay 2ⁿ">
              Mỗi phần tử có 2 lựa chọn.
              <br />
              <br />
              Có n phần tử → tổng số subset là <strong>2ⁿ</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Choice */}
          <section id="subsets-choice" className="scroll-mt-24">
            <SectionTitle
              number="19"
              title="Choose / Not Choose"
              description="Đây là cách nghĩ đơn giản nhất để tự xây cây quyết định."
            />

            <div className="my-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Check size={19} />
                  Choose
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Thêm phần tử vào subset hiện tại rồi đi tiếp.
                </p>

                <div className="mt-5 rounded-xl bg-white/70 p-4 font-mono text-sm">
                  path[pathSize] = nums[index]
                  <br />
                  pathSize++
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <ArrowRight size={19} />
                  Not Choose
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Bỏ qua phần tử và đi tiếp sang phần tử kế.
                </p>

                <div className="mt-5 rounded-xl bg-white/70 p-4 font-mono text-sm">
                  backtrack(index + 1)
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Có hai cách viết</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Một cách là viết trực tiếp hai nhánh:
            </p>

            <CodeBlock code={subsetsDecisionCode} />

            <p className="text-sm leading-7 text-slate-600">
              Cách thứ hai là dùng vòng lặp từ <code>index</code> trở đi. Đây là
              cách rất phổ biến cho bài Subsets.
            </p>

            <InfoBox type="important" title="Tại sao dùng i + 1?">
              Sau khi đã chọn <code>nums[i]</code>, những lựa chọn tiếp theo chỉ
              được lấy từ các phần tử phía sau.
              <br />
              <br />
              Nhờ vậy mỗi subset được tạo ra đúng một lần và không bị đảo thứ tự
              như [1,2] và [2,1].
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets State */}
          <section id="subsets-state" className="scroll-mt-24">
            <SectionTitle
              number="20"
              title="State của bài Subsets"
              description="Xác định đúng state thì code gần như tự xuất hiện."
            />

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  nums
                </div>

                <div className="mt-3 font-mono text-lg font-bold">[1,2,3]</div>

                <p className="mt-2 text-sm text-slate-500">Dữ liệu gốc.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  index
                </div>

                <div className="mt-3 font-mono text-lg font-bold">0,1,2</div>

                <p className="mt-2 text-sm text-slate-500">
                  Đi tới phần tử nào.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  path
                </div>

                <div className="mt-3 font-mono text-lg font-bold text-emerald-800">
                  [1,2]
                </div>

                <p className="mt-2 text-sm text-slate-500">Subset hiện tại.</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi đạt đến một trạng thái bất kỳ, path hiện tại luôn là một
              subset hợp lệ.
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              path = current subset
            </div>

            <InfoBox type="tip" title="Một điểm rất hay">
              Trong bài Subsets, chúng ta có thể{" "}
              <strong>lưu path ngay tại mỗi level</strong>, vì mọi path đều là
              một subset hợp lệ.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Tree */}
          <section id="subsets-tree" className="scroll-mt-24">
            <SectionTitle
              number="21"
              title="Cây quyết định của Subsets"
              description="Đây chính là Backtracking Tree."
            />

            <SubsetTreeDiagram />

            <p className="text-sm leading-7 text-slate-600">
              Với [1,2,3], mỗi level tương ứng với việc xử lý thêm một phần tử.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Level 0
                </p>

                <p className="mt-3 font-mono text-xl font-bold">[]</p>

                <p className="mt-2 text-sm text-slate-500">Chưa chọn gì.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Level 1
                </p>

                <p className="mt-3 font-mono text-xl font-bold">
                  [1], [2], [3]
                </p>

                <p className="mt-2 text-sm text-slate-500">Chọn một phần tử.</p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Level 2+
                </p>

                <p className="mt-3 font-mono text-xl font-bold text-emerald-800">
                  [1,2,3]
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Tiếp tục mở rộng subset.
                </p>
              </div>
            </div>

            <InfoBox
              type="important"
              title="Đừng nghĩ Output là thứ được tạo sau cùng"
            >
              Với bài Subsets, mỗi khi Backtracking đang ở một state hợp lệ,
              state đó đã là một đáp án và có thể được copy vào result ngay.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Dry Run */}
          <section id="subsets-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="22"
              title="Dry Run Subsets"
              description="Chạy từng bước với nums = [1,2,3]."
            />

            <div className="space-y-5">
              <StepCard number="01" title="Bắt đầu">
                path = [].
                <br />
                Lưu [] vào result.
              </StepCard>

              <StepCard number="02" title="Chọn 1">
                path = [1].
                <br />
                Lưu [1].
              </StepCard>

              <StepCard number="03" title="Chọn 2">
                path = [1,2].
                <br />
                Lưu [1,2].
              </StepCard>

              <StepCard number="04" title="Chọn 3">
                path = [1,2,3].
                <br />
                Lưu [1,2,3].
              </StepCard>

              <StepCard number="05" title="Undo 3">
                Xóa 3 → path = [1,2].
                <br />
                Quay lại thử lựa chọn khác.
              </StepCard>

              <StepCard number="06" title="Undo 2">
                Xóa 2 → path = [1].
              </StepCard>

              <StepCard number="07" title="Thử 3">
                path = [1,3].
                <br />
                Lưu [1,3].
              </StepCard>

              <StepCard number="08" title="Quay lại">
                Cuối cùng thử các nhánh bắt đầu bằng [2] và [3].
              </StepCard>
            </div>

            <CodeBlock code={validSubsetCode} label="text" />

            <InfoBox type="tip" title="Tại sao không trùng?">
              Bởi vì khi đang ở index i, chúng ta chỉ chọn những phần tử từ i
              trở đi. Một phần tử không quay ngược lại phía trước, nên cùng một
              subset không được tạo theo nhiều thứ tự khác nhau.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Code */}
          <section id="subsets-code" className="scroll-mt-24">
            <SectionTitle
              number="23"
              title="Code Subsets"
              description="Implementation C theo pattern Backtracking."
            />

            <p className="text-sm leading-7 text-slate-600">
              Đây là implementation đầy đủ theo interface C của LeetCode:
            </p>

            <CodeBlock code={subsetsCode} />

            <h3 className="mt-8 text-xl font-bold">Phần quan trọng nhất</h3>

            <div className="mt-5 space-y-4">
              <StepCard number="01" title="Copy path vào result">
                Mỗi path hiện tại là một subset hợp lệ.
              </StepCard>

              <StepCard number="02" title="for từ index">
                Thử lần lượt từng phần tử có thể chọn.
              </StepCard>

              <StepCard number="03" title="Thêm vào path">
                Đặt <code>nums[i]</code> vào cuối path.
              </StepCard>

              <StepCard number="04" title="Recursion">
                Gọi lại với <code>i + 1</code>.
              </StepCard>

              <StepCard number="05" title="Undo">
                Khi recursion quay về, giảm <code>pathSize</code> để bỏ phần tử
                cuối.
              </StepCard>
            </div>

            <InfoBox type="important" title="Undo trong code C">
              Ta có thể không cần xóa giá trị vật lý khỏi array path.
              <br />
              <br />
              Chỉ cần:
              <br />
              <code>pathSize--;</code>
              <br />
              <br />
              vì từ góc nhìn logic, phần tử cuối đã không còn nằm trong subset
              hiện tại.
            </InfoBox>

            <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
              pathSize++
              <span className="mx-3 text-slate-500">→</span>
              recurse
              <span className="mx-3 text-slate-500">→</span>
              pathSize--
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Complexity */}
          <section id="subsets-complexity" className="scroll-mt-24">
            <SectionTitle
              number="24"
              title="Complexity của Subsets"
              description="Đây là chỗ rất quan trọng để hiểu vì sao 2ⁿ xuất hiện."
            />

            <p className="text-sm leading-7 text-slate-600">
              Với n phần tử, số subset là:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-2xl font-bold text-white">
              2ⁿ
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Vì mỗi phần tử có hai lựa chọn:
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <Check size={18} className="text-emerald-600" />

                <h3 className="mt-3 font-bold">Choose</h3>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <ArrowRight size={18} className="text-slate-500" />

                <h3 className="mt-3 font-bold">Skip</h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Mỗi subset chứa tối đa n phần tử, nên để copy toàn bộ output, tổng
              công việc vào khoảng:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              O(n × 2ⁿ)
            </div>

            <Complexity
              time="O(n × 2ⁿ)"
              space="O(n × 2ⁿ)"
              timeDescription="Có 2ⁿ subset và mỗi subset có thể cần copy tới n phần tử."
              spaceDescription="Result cần lưu toàn bộ output; recursion/path thêm O(n)."
            />

            <InfoBox type="tip" title="Output itself đã rất lớn">
              Không thể kỳ vọng algorithm output tất cả 2ⁿ subset mà chạy nhanh
              hơn đáng kể so với kích thước của chính output.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Edge Cases */}
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="25"
              title="Edge Cases"
              description="Backtracking thường có một vài trường hợp đặc biệt phải kiểm tra."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Empty Array</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Với nums = [] thì vẫn có đúng một subset: empty subset.
                    </p>

                    <CodeBlock code={emptySubsetCode} label="text" />
                  </div>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Chỉ có một phần tử</h3>

                    <p className="mt-2 font-mono text-sm">[7]</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Có đúng hai subset: [] và [7].
                    </p>
                  </div>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Không được tạo duplicate</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đề bài cho nums gồm các số nguyên unique, vì vậy không cần
                      xử lý duplicate trong input.
                    </p>
                  </div>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Empty subset vẫn là đáp án">
              Đây là một chi tiết rất dễ quên.
              <br />
              <br />
              Với mọi array, <strong>[]</strong> luôn là một subset hợp lệ.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Common Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24">
            <SectionTitle
              number="26"
              title="Lỗi thường gặp"
              description="Các lỗi này thường khiến Backtracking cho thiếu hoặc trùng kết quả."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Quên Undo</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      State của một nhánh sẽ bị giữ lại khi thử nhánh tiếp theo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Push nhưng không Pop</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đây chính là phiên bản cụ thể của lỗi quên Undo khi dùng
                      array/list làm path.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Lưu reference của path thay vì copy
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Result phải lưu snapshot của path tại thời điểm đó, không
                      phải một reference vẫn tiếp tục thay đổi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Cho phép chọn lại phần tử phía trước
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Điều này có thể tạo những subset giống nhau theo thứ tự
                      khác nhau.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Quên empty subset</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      [] luôn phải xuất hiện trong kết quả.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox type="tip" title="Quy tắc vàng">
              Mỗi lần bạn thay đổi state trước recursion, hãy tự hỏi:
              <br />
              <br />
              <strong>
                "Sau khi recursion xong, tôi đã trả state về đúng trạng thái ban
                đầu chưa?"
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition */}
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle
              number="27"
              title="Nhận diện Pattern Backtracking"
              description="Mục tiêu là nhìn đề và nhận ra cây quyết định."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <GitBranch size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Subsets</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mỗi phần tử: chọn hoặc không chọn.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  2ⁿ
                </p>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <GitMerge size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Combinations</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Chọn một nhóm phần tử mà không quan tâm thứ tự.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  Choose k
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <RotateCcw size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Permutations</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mỗi lần chọn một phần tử chưa dùng và phải track trạng thái
                  used.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  used[]
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Network size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Board / Grid</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  DFS nhiều hướng + đánh dấu cell + Undo.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  mark → DFS → unmark
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Câu hỏi nhận diện mạnh nhất">
              Hãy hỏi:
              <br />
              <br />
              <strong>
                "Từ state hiện tại, có nhiều lựa chọn và tôi cần thử từng lựa
                chọn không?"
              </strong>
              <br />
              <br />
              Nếu có, hãy nghĩ tới Backtracking.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="28"
              title="Tổng kết Backtracking"
              description="Từ Recursion đến cây quyết định và bài Subsets."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <RotateCcw size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Recursion</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Function gọi lại chính nó để giải bài toán nhỏ hơn.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Decision Tree</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi Node đại diện cho một trạng thái và nhiều lựa chọn tiếp
                  theo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Check size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Choose</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thay đổi state để thử một khả năng.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Undo2 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Undo</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Hoàn tác state trước khi thử nhánh khác.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Pruning</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cắt những nhánh không thể tạo ra solution.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Code2 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Subsets</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi phần tử có 2 lựa chọn → tổng 2ⁿ subset.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Fibonacci và Subsets khác nhau thế nào?
            </h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[820px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Problem
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Pattern
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý tưởng
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Complexity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Fibonacci
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Recursion / DP
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      fib(n) phụ thuộc fib(n-1) và fib(n-2)
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(2ⁿ) naive
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold">Subsets</td>

                    <td className="px-5 py-4 font-mono">Backtracking</td>

                    <td className="px-5 py-4 text-slate-600">
                      Choose / Skip mỗi phần tử
                    </td>

                    <td className="px-5 py-4 font-mono">O(n × 2ⁿ)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoBox type="important" title="Mental model cuối cùng">
              Hãy ghi nhớ Backtracking bằng một câu:
              <br />
              <br />
              <strong>
                "Chọn một khả năng → đi sâu → nếu quay lại thì hoàn tác → thử
                khả năng khác."
              </strong>
            </InfoBox>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Backtracking roadmap
              </p>

              <h3 className="mt-3 text-2xl font-bold">Mental model</h3>

              <div className="mt-7 space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>Recursion</div>
                <div>↓</div>
                <div>Multiple choices</div>
                <div>↓</div>
                <div>Decision Tree</div>
                <div>↓</div>
                <div>Choose</div>
                <div>↓</div>
                <div>Explore with recursion</div>
                <div>↓</div>
                <div>Undo</div>
                <div>↓</div>
                <div>Try another branch</div>
                <div>↓</div>
                <div className="text-emerald-300">Backtracking</div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to="/algorithms/tries"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeft
                    size={18}
                    className="text-slate-400 transition-transform group-hover:-translate-x-1"
                  />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Previous
                    </p>

                    <p className="mt-1 font-semibold">Tries</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Finish
                  </p>

                  <p className="mt-1 font-semibold">Tất cả thuật toán</p>
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />
              </Link>
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
          <span>Backtracking · Fibonacci · Subsets</span>
        </div>
      </footer>
    </div>
  );
}
