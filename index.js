<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-[#E7DECC]">
    <!-- Top navigation bar -->
    <nav class="flex justify-between items-center bg-white text-black p-4">
        <div>
            <img src="logoKuSolidOutline.1f4fa971.svg" alt="Logo" class="h-6 w-auto"> <!-- Placeholder icon -->
        </div>
    </nav>

    <!-- Main body -->
    <main class="p-6 max-w-4xl mx-auto mt-8">
        <!-- First row -->
        <div class="flex justify-between items-center pb-4">
            <h2 class="text-2xl font-bold">Stories Moderation</h2>
        </div>

        <!-- Second row -->
        <form class="space-y-4">
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <label>From Date</label>
                    <input type="date" class="w-full border p-2 rounded-full">
                    <label>To Date</label>
                    <input type="date" class="w-full border p-2 rounded-full">
                </div>

                <div>
                    <label>App Language</label>
                    <select class="w-full border p-2 rounded-full">
                        <option>All</option>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>

                <div>
                    <label>Country</label>
                    <select class="w-full border p-2 rounded-full">
                        <option>All</option>
                        <option>India</option>
                        <option>Brazil</option>
                        <option>ROW</option>
                    </select>
                </div>

                <div>
                    <label>Search by Story ID</label>
                    <input type="text" class="w-full border p-2 rounded-full">
                </div>
            </div>
        </form>

        <!-- Third row -->
        <div class="space-y-4">
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Unmoderated</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Approved</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Rejected</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Hold</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">All</button>
                </div>
                <div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Eminent</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">High Potential</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Organic</button>
                </div>
                <div>
                    <!-- Please replace 'x' with the count of stories in the selected section -->
                    <p>Count of stories in the selected section: x</p>
                </div>
            </div>
        </div>

        <!-- Fourth row -->
        <div class="grid grid-cols-3 gap-4 mt-12">
            <div class="bg-white p-4 shadow rounded-lg relative">
                <h2 class="text-6xl font-bold">User Details</h2>
                <ul>
                    <li>Image</li>
                    <li>Name</li>
                    <li>Handle</li>
                    <li>Koo app link</li>
                </ul>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Block</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Hide</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Blacklist</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Approve Fake</button>
            </div>

            <div class="bg-white p-4 shadow rounded-lg relative">
                <h2 class="text-6xl font-bold">Content Details</h2>
                <ul>
                    <li>Content Image</li>
                    <li>Content Text</li>
                    <li>Content URL</li>
                </ul>
            </div>

            <div class="bg-white p-4 shadow rounded-lg relative">
                <h2 class="text-6xl font-bold">User Meta</h2>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Approve</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Hide</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full">Temp Hide</button>
                <label><input type="checkbox" class="form-checkbox"> Verified User</label>
                <label><input type="checkbox" class="form-checkbox"> Promote User</label>
                <label><input type="checkbox" class="form-checkbox"> High Potential User</label>
            </div>
        </div>
    </main>
</body>
</html>
