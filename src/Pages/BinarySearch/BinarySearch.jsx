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
  Lightbulb,
  List,
  Search,
  Target,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const toc = [
  {
    id: "introduction",
    label: "Binary Search là gì?",
  },
  {
    id: "search-basics",
    label: "1. Tìm kiếm cơ bản",
  },
  {
    id: "linear-search",
    label: "2. Linear Search",
  },
  {
    id: "requirement",
    label: "3. Điều kiện của Binary Search",
  },
  {
    id: "core-idea",
    label: "4. Ý tưởng chia đôi",
  },
  {
    id: "search-space",
    label: "5. Search Space",
  },
  {
    id: "left-right-mid",
    label: "6. Left, Right và Mid",
  },
  {
    id: "mid",
    label: "7. Tính Mid đúng cách",
  },
  {
    id: "dry-run-basic",
    label: "8. Dry Run cơ bản",
  },
  {
    id: "problem",
    label: "9. Bài toán Binary Search",
  },
  {
    id: "brute-force",
    label: "10. Vì sao Linear Search không đủ?",
  },
  {
    id: "binary-solution",
    label: "11. Giải bằng Binary Search",
  },
  {
    id: "dry-run-solution",
    label: "12. Dry Run bài toán",
  },
  {
    id: "code",
    label: "13. Code C",
  },
  {
    id: "explain-code",
    label: "14. Giải thích từng dòng",
  },
  {
    id: "complexity",
    label: "15. Complexity",
  },
  {
    id: "edge-cases",
    label: "16. Edge Cases",
  },
  {
    id: "mistakes",
    label: "17. Lỗi thường gặp",
  },
  {
    id: "recognition",
    label: "18. Nhận diện Binary Search",
  },
  {
    id: "summary",
    label: "19. Tổng kết",
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
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <div className="mt-2 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchCell({
  value,
  active = false,
  found = false,
  left = false,
  right = false,
  mid = false,
}) {
  return (
    <div className="relative flex-1">
      <div
        className={`rounded-xl border p-4 text-center font-mono font-bold transition ${
          found
            ? "border-emerald-300 bg-emerald-50 text-emerald-700"
            : active
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-900"
        }`}
      >
        {value}{" "}
      </div>

      <div className="mt-2 flex min-h-5 justify-center gap-1 text-[10px] font-semibold">
        {left && (
          <span className="rounded bg-sky-100 px-1.5 py-0.5 text-sky-700">
            L
          </span>
        )}

        {mid && (
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-700">
            M
          </span>
        )}

        {right && (
          <span className="rounded bg-violet-100 px-1.5 py-0.5 text-violet-700">
            R
          </span>
        )}
      </div>
    </div>
  );
}

const linearSearchCode = `int linearSearch(
int* nums,
int numsSize,
int target
) {
for (int i = 0; i < numsSize; i++) {
if (nums[i] == target) {
return i;
}
}


return -1;


}`;

const binaryBasicCode = `int binarySearch(
int* nums,
int numsSize,
int target
) {
int left = 0;
int right = numsSize - 1;


while (left <= right) {
    int mid =
        left + (right - left) / 2;

    if (nums[mid] == target) {
        return mid;
    }

    if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

return -1;


}`;

const binaryRecursiveCode = `int binarySearch(
int* nums,
int left,
int right,
int target
) {
if (left > right) {
return -1;
}


int mid =
    left + (right - left) / 2;

if (nums[mid] == target) {
    return mid;
}

if (nums[mid] < target) {
    return binarySearch(
        nums,
        mid + 1,
        right,
        target
    );
}

return binarySearch(
    nums,
    left,
    mid - 1,
    target
);


}`;

const binarySearchProblemCode = `int search(
    int* nums,
    int numsSize,
    int target
) {
    // TODO
}`;

const binarySearchFinalCode = `int search(
int* nums,
int numsSize,
int target
) {
int left = 0;
int right = numsSize - 1;


while (left <= right) {
    int mid =
        left + (right - left) / 2;

    if (nums[mid] == target) {
        return mid;
    }

    if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

return -1;


}`;

export default function BinarySearch() {
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
              <Search size={14} />
              NEETCODE · BINARY SEARCH{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Binary Search
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Binary Search là một trong những kỹ thuật tìm kiếm quan trọng nhất
              trong Data Structures & Algorithms. Thay vì kiểm tra từng phần tử
              một, chúng ta liên tục loại bỏ một nửa vùng tìm kiếm sau mỗi bước.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Search size={16} />
                Search
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Zap size={16} />
                O(log n)
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
              title="Binary Search là gì?"
              description="Hãy bắt đầu từ câu hỏi đơn giản nhất: nếu tôi muốn tìm một giá trị trong một danh sách thì tôi phải làm thế nào?"
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Giả sử chúng ta có một Array chứa rất nhiều số và cần tìm một số
              cụ thể.
            </p>

            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[620px] gap-2">
                {[1, 3, 5, 7, 9, 11, 13, 15].map((number) => (
                  <div
                    key={number}
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-mono font-bold"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu cần tìm <strong>13</strong>, bạn có thể kiểm tra từng phần tử.
              Nhưng Array ở trên có một đặc điểm rất quan trọng:
            </p>

            <div className="my-6 rounded-3xl border border-slate-200 bg-slate-950 p-7 text-center">
              <p className="font-mono text-2xl font-bold text-white">
                Array đã được sắp xếp
              </p>

              <p className="mt-3 text-sm text-slate-400">ascending order</p>
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Chính tính chất này cho phép chúng ta loại bỏ một nửa dữ liệu mà
              không cần kiểm tra từng phần tử.
            </p>

            <InfoBox type="important" title="Một câu định nghĩa">
              <strong>
                Binary Search là kỹ thuật tìm kiếm bằng cách liên tục chia đôi
                vùng dữ liệu đang cần tìm.
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Search basics */}
          <section id="search-basics" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Tìm kiếm cơ bản là gì?"
              description="Trước Binary Search, chúng ta phải hiểu bài toán Search."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Search nghĩa là chúng ta có một tập dữ liệu và một{" "}
              <strong>target</strong>, sau đó cần xác định target có tồn tại hay
              không và nếu có thì nó nằm ở đâu.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Data
                </p>

                <p className="mt-3 font-mono text-lg font-bold">
                  [2, 4, 6, 8, 10]
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target
                </p>

                <p className="mt-3 font-mono text-lg font-bold">8</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Kết quả mong muốn là index của 8:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl font-bold text-white">
              3
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu target không tồn tại thì trả về:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-xl font-bold">
              -1
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Linear Search */}
          <section id="linear-search" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Linear Search"
              description="Cách đơn giản nhất là kiểm tra lần lượt từ đầu đến cuối."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Với:
            </p>

            <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 font-mono text-sm">
              [3, 8, 12, 17, 25, 31]
            </div>

            <p className="text-sm leading-7 text-slate-600">Nếu target = 25:</p>

            <div className="my-6 flex min-w-[620px] gap-2 overflow-x-auto pb-2">
              {[3, 8, 12, 17, 25, 31].map((number) => (
                <div
                  key={number}
                  className={`min-w-[82px] rounded-xl border p-4 text-center font-mono font-bold ${
                    number === 25
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {number}
                </div>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Chúng ta phải kiểm tra:
            </p>

            <div className="my-5 grid gap-2 sm:grid-cols-5">
              {["3", "8", "12", "17", "25 ✓"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center font-mono text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <CodeBlock code={linearSearchCode} />

            <p className="text-sm leading-7 text-slate-600">
              Trường hợp xấu nhất, target nằm cuối Array hoặc hoàn toàn không
              tồn tại. Khi đó chúng ta phải đi qua toàn bộ n phần tử.
            </p>

            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="Có thể phải kiểm tra toàn bộ Array."
              spaceDescription="Chỉ dùng biến i."
            />

            <InfoBox type="important" title="Vấn đề">
              Nếu Array đã được sắp xếp, việc đi qua từng phần tử là đang{" "}
              <strong>bỏ phí thông tin mà thứ tự của Array cung cấp</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Requirement */}
          <section id="requirement" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Điều kiện để dùng Binary Search"
              description="Không phải Array nào cũng có thể áp dụng Binary Search."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Check size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Có thứ tự</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dữ liệu phải có tính chất cho phép chúng ta loại bỏ một phần
                  search space dựa trên giá trị đang kiểm tra.
                </p>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700">
                  <X size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Không có thông tin thứ tự
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nếu không biết nửa nào chắc chắn chứa target, chúng ta không
                  được phép loại bỏ nửa đó.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Ví dụ</h3>

            <div className="my-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Sorted
                </p>

                <p className="mt-3 font-mono">[1, 3, 5, 7, 9, 11]</p>

                <p className="mt-3 text-sm text-slate-500">
                  Có thể dùng Binary Search.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Unsorted
                </p>

                <p className="mt-3 font-mono">[7, 1, 11, 3, 9, 5]</p>

                <p className="mt-3 text-sm text-slate-500">
                  Không thể tự động loại bỏ một nửa chỉ từ giá trị giữa.
                </p>
              </div>
            </div>

            <InfoBox type="tip" title="Câu hỏi cần hỏi đầu tiên">
              <strong>
                "Tôi có đủ thông tin để biết một nửa dữ liệu chắc chắn không có
                đáp án không?"
              </strong>
              <br />
              <br />
              Nếu có, Binary Search có thể là lựa chọn phù hợp.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Core idea */}
          <section id="core-idea" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Ý tưởng chia đôi"
              description="Đây là toàn bộ sức mạnh của Binary Search."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Giả sử có 16 phần tử.
            </p>

            <div className="my-6 grid grid-cols-4 gap-2 sm:grid-cols-8">
              {Array.from({ length: 16 }, (_, index) => index + 1).map(
                (number) => (
                  <div
                    key={number}
                    className="rounded-lg border border-slate-200 bg-white p-3 text-center font-mono text-xs sm:p-4"
                  >
                    {number}
                  </div>
                ),
              )}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu chỉ kiểm tra từng phần tử thì có thể cần 16 lần kiểm tra.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Nhưng Binary Search kiểm tra giữa trước:
            </p>

            <div className="my-6 grid grid-cols-2 gap-2 sm:grid-cols-8">
              {Array.from({ length: 16 }, (_, index) => index + 1).map(
                (number) => (
                  <div
                    key={number}
                    className={`rounded-lg border p-3 text-center font-mono text-xs sm:p-4 ${
                      number === 8
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-400"
                    }`}
                  >
                    {number}
                  </div>
                ),
              )}
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau khi nhìn vào 8, chúng ta biết target nằm về bên trái hay bên
              phải, vì Array đã sắp xếp.
            </p>

            <div className="my-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="font-semibold text-red-800">Target &lt; 8</p>

                <p className="mt-2 text-sm text-slate-600">
                  Bỏ toàn bộ nửa bên phải.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-semibold text-emerald-800">Target &gt; 8</p>

                <p className="mt-2 text-sm text-slate-600">
                  Bỏ toàn bộ nửa bên trái.
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Điểm cốt lõi">
              Mỗi lần kiểm tra, chúng ta không chỉ kiểm tra một phần tử. Chúng
              ta dùng phần tử đó để{" "}
              <strong>loại bỏ một nửa search space</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Search Space */}
          <section id="search-space" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Search Space là gì?"
              description="Hiểu Search Space sẽ giúp bạn hiểu Binary Search sâu hơn rất nhiều."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Search Space là tập hợp những vị trí hoặc giá trị{" "}
              <strong>vẫn còn có khả năng chứa đáp án</strong>.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">Ban đầu:</p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5 font-mono text-center">
              toàn bộ Array
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau một lần kiểm tra:
            </p>

            <div className="my-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-xs text-slate-400">Original</p>
                <p className="mt-2 font-mono font-bold">n</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-xs text-slate-400">After 1 step</p>
                <p className="mt-2 font-mono font-bold">n / 2</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-xs text-slate-400">After 2 steps</p>
                <p className="mt-2 font-mono font-bold">n / 4</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">Sau k bước:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">
              n / 2<sup>k</sup>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi chỉ còn khoảng 1 phần tử:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-xl font-bold">
              n / 2<sup>k</sup> = 1
            </div>

            <p className="text-sm leading-7 text-slate-600">Từ đây:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">
              k ≈ log₂(n)
            </div>

            <InfoBox title="Đây là lý do Binary Search là O(log n)">
              Không phải vì chúng ta có một vòng <code>while</code> đặc biệt.
              <br />
              <br />
              Nó là <strong>O(log n)</strong> vì sau mỗi bước search space bị
              chia đôi.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Left Right Mid */}
          <section id="left-right-mid" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Left, Right và Mid"
              description="Binary Search thường được cài đặt bằng ba vị trí quan trọng."
            />

            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[650px] gap-2">
                {[2, 4, 6, 8, 10, 12, 14].map((number, index) => (
                  <div key={number} className="relative flex-1">
                    <div
                      className={`rounded-xl border p-4 text-center font-mono font-bold ${
                        index === 0
                          ? "border-sky-300 bg-sky-50 text-sky-800"
                          : index === 6
                            ? "border-violet-300 bg-violet-50 text-violet-800"
                            : index === 3
                              ? "border-amber-300 bg-amber-50 text-amber-800"
                              : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      {number}
                    </div>

                    <div className="mt-2 text-center text-[10px] font-semibold">
                      {index === 0 && (
                        <span className="text-sky-700">LEFT</span>
                      )}

                      {index === 3 && (
                        <span className="text-amber-700">MID</span>
                      )}

                      {index === 6 && (
                        <span className="text-violet-700">RIGHT</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <p className="font-mono font-bold text-sky-800">left</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Điểm bắt đầu của Search Space.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-mono font-bold text-amber-800">mid</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Vị trí chính giữa mà chúng ta kiểm tra.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                <p className="font-mono font-bold text-violet-800">right</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Điểm kết thúc của Search Space.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Sau khi kiểm tra mid</h3>

            <div className="mt-5 space-y-3">
              <StepCard number="01" title="nums[mid] == target">
                Tìm thấy target → trả về <code>mid</code>.
              </StepCard>

              <StepCard number="02" title="nums[mid] < target">
                Vì Array tăng dần, mọi phần tử bên trái mid đều nhỏ hơn target.
                Bỏ bên trái và đặt <code>left</code> sau mid.
              </StepCard>

              <StepCard number="03" title="nums[mid] > target">
                Vì Array tăng dần, mọi phần tử bên phải mid đều lớn hơn target.
                Bỏ bên phải và đặt <code>right</code> trước mid.
              </StepCard>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Mid */}
          <section id="mid" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Tính Mid đúng cách"
              description="Một dòng code nhỏ nhưng bạn nên hình thành thói quen viết an toàn."
            />

            <p className="text-sm leading-7 text-slate-600">Cách dễ nghĩ:</p>

            <CodeBlock code={`int mid = (left + right) / 2;`} />

            <p className="text-sm leading-7 text-slate-600">
              Công thức trên thường cho ra kết quả đúng, nhưng nếu{" "}
              <code>left</code> và <code>right</code> là những số nguyên rất
              lớn, phép cộng <code>left + right</code> có thể gây overflow.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Cách an toàn hơn là:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">
              left + (right - left) / 2
            </div>

            <CodeBlock
              code={`int mid =
left + (right - left) / 2;`}
            />

            <InfoBox
              type="tip"
              title="Tại sao công thức vẫn cho cùng một kết quả?"
            >
              Về mặt toán học:
              <br />
              <br />
              <code>left + (right - left) / 2</code>
              <br />
              tương đương với trung điểm giữa left và right, nhưng tránh phải
              cộng trực tiếp hai số lớn.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dry run basic */}
          <section id="dry-run-basic" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Dry Run Binary Search cơ bản"
              description="Trước khi giải bài, hãy chạy thuật toán bằng tay."
            />

            <p className="text-sm leading-7 text-slate-600">Array:</p>

            <div className="my-6 overflow-x-auto">
              <div className="flex min-w-[620px] gap-2">
                {[2, 4, 6, 8, 10, 12, 14, 16, 18].map((number) => (
                  <div
                    key={number}
                    className="flex-1 rounded-xl border border-slate-200 bg-white p-4 text-center font-mono font-bold"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Target = <strong>14</strong>.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Step
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Left
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Mid
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Right
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      nums[mid]
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["1", "0", "4", "8", "10", "10 < 14 → left = mid + 1"],
                    ["2", "5", "6", "8", "14", "Found → return 6"],
                  ].map(([step, left, mid, right, value, action]) => (
                    <tr key={step}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono font-bold">
                        {step}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {left}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {mid}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {right}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {value}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-800">
                Chỉ cần 2 lần kiểm tra thay vì đi qua toàn bộ Array.
              </p>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Problem */}
          <section id="problem" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Bài toán Binary Search"
              description="Đây chính là bài toán bạn cần giải trong trang này."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Problem
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    Binary Search
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Easy
                </span>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  Cho một mảng các số nguyên <code>nums</code> không trùng nhau,
                  được sắp xếp tăng dần, cùng một số nguyên <code>target</code>.
                </p>

                <p>
                  Hãy tìm <code>target</code> trong <code>nums</code>.
                </p>

                <p>
                  Nếu tồn tại, trả về index của nó. Nếu không tồn tại, trả về{" "}
                  <code>-1</code>.
                </p>

                <p className="font-semibold text-slate-900">
                  Yêu cầu quan trọng:
                </p>

                <div className="rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg font-bold text-white">
                  O(log n)
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Những thông tin đề bài đã cho
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Distinct
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Không có hai phần tử giống nhau.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sorted
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Được sắp xếp theo thứ tự tăng dần.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Complexity
                </p>

                <p className="mt-3 font-mono text-sm font-bold">O(log n)</p>
              </div>
            </div>

            <InfoBox
              type="important"
              title="Đề bài đang gần như chỉ thẳng kỹ thuật"
            >
              Hai từ khóa quan trọng nhất là:
              <br />
              <br />
              <strong>sorted</strong> + <strong>O(log n)</strong>
              <br />
              <br />
              Đây là dấu hiệu cực mạnh cho Binary Search.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Brute force */}
          <section id="brute-force" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Vì sao Linear Search không đủ?"
              description="Hãy thử giải bài toán theo cách đơn giản trước."
            />

            <CodeBlock
              code={`int search(
int* nums,
int numsSize,
int target


) {
for (int i = 0; i < numsSize; i++) {
if (nums[i] == target) {
return i;
}
}


return -1;


}`}
            />

            <p className="text-sm leading-7 text-slate-600">
              Code này đúng về mặt kết quả. Nhưng complexity là:
            </p>

            <div className="my-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
              <p className="font-mono text-2xl font-bold text-red-700">O(n)</p>

              <p className="mt-2 text-sm text-slate-600">
                Không đáp ứng yêu cầu O(log n).
              </p>
            </div>

            <InfoBox title="Điều bài toán đang bắt chúng ta làm">
              Vì đề bài yêu cầu <strong>O(log n)</strong>, chúng ta cần một cách
              mà sau mỗi bước có thể loại bỏ một phần rất lớn của dữ liệu.
              <br />
              <br />
              Vì Array đã được sort, đó chính là điều Binary Search cho phép.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Binary solution */}
          <section id="binary-solution" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Giải bằng Binary Search"
              description="Bây giờ biến lý thuyết thành thuật toán."
            />

            <h3 className="text-xl font-bold">
              Bước 1 — Xác định Search Space
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ban đầu toàn bộ Array đều có khả năng chứa target.
            </p>

            <CodeBlock
              code={`int left = 0;


int right = numsSize - 1;`}
            />

            <h3 className="mt-8 text-xl font-bold">
              Bước 2 — Lấy phần tử ở giữa
            </h3>

            <CodeBlock
              code={`int mid =
left + (right - left) / 2;`}
            />

            <h3 className="mt-8 text-xl font-bold">Bước 3 — So sánh</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-mono font-bold text-emerald-800">
                  nums[mid] == target
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Tìm thấy → trả về mid.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <p className="font-mono font-bold text-sky-800">
                  nums[mid] &lt; target
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Target lớn hơn giá trị giữa → target chỉ có thể nằm bên phải.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                <p className="font-mono font-bold text-violet-800">
                  nums[mid] &gt; target
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Target nhỏ hơn giá trị giữa → target chỉ có thể nằm bên trái.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Bước 4 — Thu hẹp Search Space
            </h3>

            <CodeBlock
              code={`if (nums[mid] < target) {
left = mid + 1;


} else {
right = mid - 1;
}`}
            />

            <p className="text-sm leading-7 text-slate-600">
              Chú ý <strong>+1</strong> và <strong>-1</strong>. Chúng ta đã kiểm
              tra mid rồi, nên mid không cần nằm trong Search Space tiếp theo
              nữa.
            </p>

            <InfoBox type="important" title="Đây chính là Binary Search">
              <strong>
                Check giữa → xác định target nằm ở nửa nào → bỏ nửa còn lại →
                lặp lại.
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dry run solution */}
          <section id="dry-run-solution" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Dry Run bài toán"
              description="Chúng ta sẽ chạy đúng bài toán bằng tay trước khi đọc code."
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Input
              </p>

              <p className="mt-3 font-mono text-lg font-bold">
                nums = [-1, 0, 3, 5, 9, 12]
              </p>

              <p className="mt-3 font-mono text-lg font-bold">target = 9</p>
            </div>

            <h3 className="mt-8 text-xl font-bold">Lần 1</h3>

            <div className="my-6 overflow-x-auto">
              <div className="flex min-w-[620px] gap-2">
                {[-1, 0, 3, 5, 9, 12].map((number, index) => (
                  <SearchCell
                    key={number}
                    value={number}
                    left={index === 0}
                    right={index === 5}
                    mid={index === 2}
                    active={index === 2}
                  />
                ))}
              </div>
            </div>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-mono text-sm">
                left = 0
                <br />
                right = 5
                <br />
                mid = 2
                <br />
                nums[2] = 3
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                3 nhỏ hơn 9 → target phải nằm bên phải.
              </p>
            </div>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-sm text-white">
              left = mid + 1 = 3
            </div>

            <h3 className="mt-8 text-xl font-bold">Lần 2</h3>

            <div className="my-6 overflow-x-auto">
              <div className="flex min-w-[620px] gap-2">
                {[-1, 0, 3, 5, 9, 12].map((number, index) => (
                  <SearchCell
                    key={number}
                    value={number}
                    left={index === 3}
                    right={index === 5}
                    mid={index === 4}
                    active={index === 4}
                  />
                ))}
              </div>
            </div>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-mono text-sm">
                left = 3
                <br />
                right = 5
                <br />
                mid = 4
                <br />
                nums[4] = 9
              </p>

              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={17} />
                nums[mid] == target → return 4
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Answer
              </p>

              <p className="mt-3 font-mono text-2xl font-bold text-emerald-800">
                4
              </p>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Trường hợp không tìm thấy
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Ví dụ:</p>

            <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 font-mono text-sm">
              nums = [-1, 0, 3, 5, 9, 12]
              <br />
              target = 2
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Search Space sẽ liên tục thu hẹp cho tới khi:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">
              left &gt; right
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi điều này xảy ra, không còn vị trí nào có thể chứa target nữa.
              Kết quả là:
            </p>

            <div className="my-5 rounded-2xl border border-red-200 bg-red-50 p-6 text-center font-mono text-2xl font-bold text-red-700">
              -1
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Code */}
          <section id="code" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Code C hoàn chỉnh"
              description="Đây là lời giải trực tiếp cho bài toán Binary Search."
            />

            <CodeBlock code={binarySearchFinalCode} />

            <InfoBox type="tip" title="Tư duy của toàn bộ code">
              Code thực chất chỉ làm 4 việc:
              <br />
              <br />
              <strong>1.</strong> Tạo Search Space bằng left và right.
              <br />
              <strong>2.</strong> Tính mid.
              <br />
              <strong>3.</strong> So sánh nums[mid] với target.
              <br />
              <strong>4.</strong> Giữ lại nửa có khả năng chứa target.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Explain code */}
          <section id="explain-code" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Giải thích từng dòng"
              description="Hiểu từng dòng code sẽ giúp bạn tự viết Binary Search thay vì học thuộc."
            />

            <StepCard number="01" title="Khởi tạo left">
              <code>left</code> bắt đầu tại index đầu tiên.
            </StepCard>

            <CodeBlock code={`int left = 0;`} />

            <StepCard number="02" title="Khởi tạo right">
              Vì index cuối cùng là <code>numsSize - 1</code>, right bắt đầu ở
              đó.
            </StepCard>

            <CodeBlock code={`int right = numsSize - 1;`} />

            <StepCard number="03" title="Điều kiện while">
              Còn Search Space khi <code>left &lt;= right</code>. Nếu{" "}
              <code>left &gt; right</code>, Search Space đã rỗng.
            </StepCard>

            <CodeBlock
              code={`while (left <= right) {
...


}`}
            />

            <StepCard number="04" title="Tính mid">
              Lấy vị trí chính giữa của Search Space.
            </StepCard>

            <CodeBlock
              code={`int mid =
left + (right - left) / 2;`}
            />

            <StepCard number="05" title="Kiểm tra target">
              Nếu phần tử giữa chính là target, chúng ta đã tìm thấy đáp án.
            </StepCard>

            <CodeBlock
              code={`if (nums[mid] == target) {
return mid;


}`}
            />

            <StepCard number="06" title="Target nằm bên phải">
              Nếu <code>nums[mid] &lt; target</code>, bởi vì Array tăng dần nên
              toàn bộ phần tử từ left tới mid đều nhỏ hơn hoặc bằng nums[mid].
              Target không thể nằm ở đó nữa.
            </StepCard>

            <CodeBlock
              code={`if (nums[mid] < target) {
left = mid + 1;


}`}
            />

            <StepCard number="07" title="Target nằm bên trái">
              Trường hợp còn lại, nums[mid] lớn hơn target. Target chỉ có thể
              nằm bên trái mid.
            </StepCard>

            <CodeBlock
              code={`else {
right = mid - 1;


}`}
            />

            <StepCard number="08" title="Không tìm thấy">
              Nếu vòng lặp kết thúc, Search Space đã rỗng.
            </StepCard>

            <CodeBlock code={`return -1;`} />

            <InfoBox type="important" title="Một lỗi logic rất phổ biến">
              Khi đã kiểm tra <code>mid</code> mà không tìm thấy, đừng để
              <code>mid</code> tồn tại trong Search Space tiếp theo.
              <br />
              <br />
              Vì vậy:
              <br />
              <code>left = mid + 1</code>
              <br />
              <code>right = mid - 1</code>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity */}
          <section id="complexity" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Complexity"
              description="Đây là phần giúp bạn hiểu tại sao bài toán yêu cầu O(log n)."
            />

            <Complexity
              time="O(log n)"
              space="O(1)"
              timeDescription="Mỗi vòng lặp loại bỏ khoảng một nửa Search Space."
              spaceDescription="Chỉ dùng left, right, mid."
            />

            <h3 className="text-xl font-bold">So sánh với Linear Search</h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[650px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Algorithm
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Mỗi bước loại bỏ
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Complexity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Linear Search
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Có thể chỉ loại 1 phần tử
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(n)
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold">Binary Search</td>

                    <td className="px-5 py-4 text-slate-600">
                      Khoảng một nửa Search Space
                    </td>

                    <td className="px-5 py-4 font-mono">O(log n)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoBox type="tip" title="Nhớ bản chất thay vì nhớ công thức">
              <strong>O(n)</strong> → mỗi bước loại được rất ít dữ liệu.
              <br />
              <strong>O(log n)</strong> → mỗi bước loại được một phần rất lớn,
              thường là một nửa.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Edge Cases */}
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="16"
              title="Edge Cases"
              description="Các trường hợp nhỏ nhưng rất dễ làm Binary Search sai."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Array rỗng</h3>

                    <p className="mt-2 font-mono text-sm">nums = []</p>

                    <p className="mt-2 text-sm text-slate-500">
                      right = -1, while không chạy → return -1.
                    </p>
                  </div>

                  <CheckCircle2 size={19} className="text-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Chỉ có một phần tử</h3>

                    <p className="mt-2 font-mono text-sm">nums = [5]</p>

                    <p className="mt-2 text-sm text-slate-500">
                      left và right cùng bằng 0.
                    </p>
                  </div>

                  <CheckCircle2 size={19} className="text-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Target ở đầu</h3>

                    <p className="mt-2 font-mono text-sm">
                      nums = [2, 4, 6, 8]
                      <br />
                      target = 2
                    </p>
                  </div>

                  <Target size={19} className="text-slate-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Target ở cuối</h3>

                    <p className="mt-2 font-mono text-sm">
                      nums = [2, 4, 6, 8]
                      <br />
                      target = 8
                    </p>
                  </div>

                  <Target size={19} className="text-slate-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Target không tồn tại</h3>

                    <p className="mt-2 font-mono text-sm">
                      nums = [2, 4, 6, 8]
                      <br />
                      target = 5
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Cuối cùng left sẽ vượt right.
                    </p>
                  </div>

                  <X size={19} className="text-red-600" />
                </div>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <SectionTitle
              number="17"
              title="Các lỗi thường gặp"
              description="Phần này đặc biệt quan trọng vì Binary Search nổi tiếng là dễ hiểu nhưng dễ code sai."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Dùng while sai điều kiện</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Với Search Space dạng inclusive, điều kiện chuẩn thường là{" "}
                      <code>left &lt;= right</code>. Nếu dùng{" "}
                      <code>left &lt; right</code> mà không điều chỉnh logic,
                      bạn có thể bỏ qua trường hợp chỉ còn một phần tử.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Viết left = mid hoặc right = mid
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Điều này có thể khiến <code>left</code> hoặc{" "}
                      <code>right</code> không thay đổi và vòng lặp chạy vô hạn.
                      Sau khi check mid, nên dùng <code>mid + 1</code> hoặc{" "}
                      <code>mid - 1</code>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Quên rằng Array phải có tính chất phù hợp
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Không thể lấy một Array bất kỳ rồi tùy tiện loại bỏ một
                      nửa dữ liệu. Phải có property đảm bảo điều đó là an toàn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-4">
                  <Lightbulb
                    size={20}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />

                  <div>
                    <h3 className="font-semibold">Chỉ học thuộc template</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Template Binary Search chỉ là điểm bắt đầu. Các bài Binary
                      Search nâng cao có thể dùng Search Space khác, điều kiện
                      khác và thậm chí Binary Search trên "answer".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Một nguyên tắc rất mạnh">
              Sau mỗi vòng lặp, hãy tự hỏi:
              <br />
              <br />
              <strong>
                "Search Space của tôi có thực sự nhỏ hơn trước không?"
              </strong>
              <br />
              <br />
              Nếu câu trả lời là không, logic Binary Search của bạn có thể đang
              có vấn đề.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition */}
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle
              number="18"
              title="Cách nhận diện Binary Search"
              description="Mục tiêu cuối cùng không phải nhớ một đoạn code mà là nhìn đề và nhận ra pattern."
            />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Search size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Search</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đề bài yêu cầu tìm một giá trị hoặc vị trí.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <CheckCircle2 size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Sorted</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Dữ liệu có thứ tự và cho phép loại bỏ một phía.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Clock3 size={19} />
                </div>

                <h3 className="mt-4 text-lg font-bold">O(log n)</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đề bài hoặc yêu cầu gợi ý việc chia search space theo cấp số
                  nhân.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">Hai dấu hiệu cực mạnh</h3>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Clue #1
                </p>

                <p className="mt-3 text-xl font-bold text-slate-900">
                  Sorted Array
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Dữ liệu đã sắp xếp thường cho phép suy luận rằng đáp án phải
                  nằm về một phía.
                </p>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  Clue #2
                </p>

                <p className="mt-3 text-xl font-bold text-slate-900">
                  O(log n)
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Đây gần như là lời gợi ý trực tiếp rằng search space cần được
                  giảm theo cấp số nhân.
                </p>
              </div>
            </div>

            <InfoBox type="tip" title="Nhưng đừng hiểu quá máy móc">
              Không phải cứ thấy "sorted" là chắc chắn dùng Binary Search.
              <br />
              <br />
              Câu hỏi quan trọng vẫn là:
              <br />
              <strong>
                "Tôi có thể dùng một phép kiểm tra để loại bỏ một phần Search
                Space một cách chắc chắn không?"
              </strong>
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">
              Binary Search không chỉ dùng cho Array
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Khi đã hiểu bản chất "chia Search Space", bạn sẽ gặp Binary Search
              ở nhiều dạng khác:
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tìm một phần tử trong Sorted Array",
                "Tìm boundary / first true",
                "Tìm first hoặc last occurrence",
                "Binary Search on Answer",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <Check size={17} className="shrink-0 text-emerald-600" />

                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="19"
              title="Tổng kết Binary Search"
              description="Nếu chỉ nhớ một vài điều sau trang này, hãy nhớ những nguyên tắc dưới đây."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Search size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Search Space</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Luôn xác định rõ phần nào của dữ liệu vẫn còn có khả năng chứa
                  đáp án.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Mid</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Luôn kiểm tra phần tử giữa rồi quyết định giữ lại nửa nào.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Half</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi bước phải loại bỏ được khoảng một nửa Search Space.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Clock3 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">O(log n)</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Complexity xuất hiện vì Search Space giảm theo cấp số nhân.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">Template cần nhớ</h3>

            <div className="my-6 rounded-3xl bg-slate-950 p-6 sm:p-8">
              <div className="space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>
                  <span className="text-sky-300">left</span>
                  <span> = 0</span>
                </div>

                <div>
                  <span className="text-violet-300">right</span>
                  <span> = n - 1</span>
                </div>

                <div className="text-slate-500">{"while (left <= right)"}</div>

                <div>
                  <span className="text-amber-300">mid</span>
                  <span> = left + (right - left) / 2</span>
                </div>

                <div className="mt-3">
                  <span className="text-emerald-300">nums[mid] == target</span>
                  <span> → found</span>
                </div>

                <div>
                  <span className="text-sky-300">nums[mid] &lt; target</span>
                  <span> → left = mid + 1</span>
                </div>

                <div>
                  <span className="text-violet-300">nums[mid] &gt; target</span>
                  <span> → right = mid - 1</span>
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Mental model">
              Đừng nhớ Binary Search là:
              <br />
              <br />
              <strong>"có một template code như này".</strong>
              <br />
              <br />
              Hãy nhớ:
              <br />
              <br />
              <strong>
                "Tôi có một Search Space. Tôi kiểm tra điểm giữa. Kết quả cho
                tôi biết phải bỏ một nửa nào."
              </strong>
            </InfoBox>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mental model
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Binary Search trong một dòng
              </h3>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">
                  Search Space
                </div>

                <ArrowRight size={18} className="text-slate-500" />

                <div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">
                  Mid
                </div>

                <ArrowRight size={18} className="text-slate-500" />

                <div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">
                  Keep 1/2
                </div>

                <ArrowRight size={18} className="text-slate-500" />

                <div className="rounded-xl bg-emerald-500/20 px-4 py-3 font-mono text-sm text-emerald-300">
                  Repeat
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/algorithms/two-pointer"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
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

                    <p className="mt-1 font-semibold">Two Pointer</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/algorithms/sliding-window"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Next
                  </p>

                  <p className="mt-1 font-semibold">Sliding Window</p>
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
          <span>Binary Search</span>
        </div>
      </footer>
    </div>
  );
}
