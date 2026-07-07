# 🎮 Patrick Farmville - Learning Journal

## Mục tiêu dự án

Xây dựng game Farmville đơn giản để học thực chiến:

- React
- JavaScript
- HTML/CSS
- Git & GitHub
- GitHub Codespaces
- Frontend Architecture
- State Management
- Tư duy Fullstack Developer

---

# Phase 0 - Environment Setup

## Đã hoàn thành

- Tạo GitHub Repository
- Kết nối GitHub Desktop
- Tạo GitHub Codespaces
- Chạy React bằng Vite
- Hiểu quy trình khởi động project

```bash
npm install
npm run dev
```

---

## Kiến thức học được

### GitHub

GitHub là:

```text
Source of Truth
```

Toàn bộ source code chuẩn nằm trên GitHub.

---

### Codespaces

Có thể code 100% online:

- Máy công ty
- Máy ở nhà
- Laptop khác

Chỉ cần đăng nhập GitHub.

---

### node_modules

Tương tự:

```python
venv/
```

trong Python.

Không commit lên GitHub.

Nếu mất:

```bash
npm install
```

để cài lại dependency.

---

# Phase 1 - React Foundation

## Component đầu tiên: Plot

### Plot.jsx

```jsx
function Plot() {
  return <div className="plot">🟫</div>;
}

export default Plot;
```

---

# JavaScript Function

## Python

```python
def hello():
    return "Hello"
```

## JavaScript

```javascript
function hello() {
    return "Hello";
}
```

---

## React Component

Component thực chất là:

```text
Một Function
```

Khác biệt:

### Python Function

Trả về:

```text
Data
```

Ví dụ:

```python
def get_name():
    return "Patrick"
```

---

### React Function

Trả về:

```text
UI
```

Ví dụ:

```jsx
function Plot() {
    return <div>🟫</div>;
}
```

---

# JSX là gì?

JSX là:

```text
HTML bên trong JavaScript
```

Ví dụ:

```jsx
<div>🟫</div>
```

---

# HTML Foundation

## div

`div` = Division

Ý nghĩa:

```text
Container
Khung chứa
Cái hộp
```

Ví dụ:

```html
<div>
    Nội dung
</div>
```

---

## h1

`h1` = Heading Level 1

Tiêu đề lớn nhất.

Ví dụ:

```html
<h1>Patrick Farmville</h1>
```

---

## button

Nút bấm.

Ví dụ:

```html
<button>Plant</button>
```

Dùng cho hành động của người dùng.

---

# CSS Foundation

## className

Ví dụ:

```jsx
<div className="plot">
```

Không hiển thị chữ:

```text
plot
```

trên màn hình.

---

Nó chỉ là:

```text
Nhãn để CSS tìm tới phần tử đó
```

Ví dụ:

```css
.plot {
    border: 1px solid black;
}
```

---

## class vs id

### class

Giống:

```text
Category
Department
Role
```

Nhiều phần tử có thể dùng chung.

Ví dụ:

```html
<div class="plot"></div>
<div class="plot"></div>
<div class="plot"></div>
```

---

### id

Giống:

```text
Primary Key
EmployeeID
PlotID
```

Phải unique.

Ví dụ:

```html
<div id="plot-1"></div>
<div id="plot-2"></div>
```

---

# Component vs CSS Class

## Plot

```jsx
function Plot()
```

Là:

```text
React Component
```

---

## plot

```jsx
className="plot"
```

Là:

```text
CSS Class
```

---

Hai thứ hoàn toàn khác nhau.

Chỉ vô tình trùng tên.

---

# React Component Tree

Hiện tại:

```text
main.jsx
↓
App.jsx
↓
FarmGrid.jsx
↓
Plot.jsx
```

---

# Props

Ví dụ:

```jsx
<Plot id={7} />
```

React truyền:

```javascript
{
    id: 7
}
```

---

Không truyền:

```javascript
7
```

---

Nhận bằng:

```jsx
function Plot({ id }) {
    return (
        <div>
            Plot {id}
        </div>
    );
}
```

---

# State Management

## Quy tắc

```text
Data đi xuống
Event đi lên
```

---

Ví dụ:

```text
App
│
├── GoldPanel
├── FarmGrid
└── Plot
```

---

## Source of Truth

Dữ liệu game nên nằm ở:

```jsx
App.jsx
```

Ví dụ:

```jsx
const [gold, setGold] = useState(100);
```

---

Không nên để:

```text
GoldPanel
Plot
```

quản lý dữ liệu riêng.

---

## GoldPanel

Chỉ có nhiệm vụ:

```text
Hiển thị Gold
```

Ví dụ:

```jsx
<GoldPanel gold={gold} />
```

---

# Thiết kế dữ liệu Farmville

## Cách đơn giản

```javascript
const plots = [1,2,3,4,5]
```

Ưu điểm:

- Dễ render
- Dễ học map()

Nhược điểm:

- Không chứa dữ liệu game

---

## Cách production

```javascript
const plots = [
  {
    id: 1,
    status: "empty"
  }
]
```

---

Có thể mở rộng:

```javascript
{
    id: 1,
    status: "empty",
    crop: null,
    plantedAt: null,
    matureAt: null
}
```

---

## Tư duy Data Engineer

Giống bảng SQL:

```sql
PlotId
Status
Crop
PlantedAt
MatureAt
```

---

# React Key

Nên dùng:

```jsx
key={plot.id}
```

---

Không nên:

```jsx
key={index}
```

---

Lý do:

```text
plot.id
```

giống:

```text
Primary Key
```

---

Còn:

```text
index
```

chỉ là vị trí tạm thời trong mảng.

---

# Tư duy React quan trọng nhất hôm nay

```text
Component = Function

Props = Input

JSX = UI Output

State = Data hiện tại

App = Source of Truth

Data đi xuống

Event đi lên
```

---

# Commit History

## Đã hoàn thành

```text
Initial React setup
```

```text
Add plot component
```

---

## Commit tiếp theo

```text
Add farm grid component
```

---

# Next Learning Topics

- FarmGrid
- map()
- Props nâng cao
- useState()
- Event Handling
- Plant Crop
- Harvest Crop
- Gold System
- Inventory System
- Save Game
- Backend API
