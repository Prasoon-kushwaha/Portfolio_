import { useState } from "react";
import ReactMarkdown from "react-markdown";
/* eslint-disable */


interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Optimizing Code for Competitive Programming",
    date: "2025-01-25",
    excerpt: "Learn key strategies and techniques to optimize your code during competitive programming contests.",
    content:
      "When it comes to competitive programming, efficiency is key. It's not just about solving the problem, but solving it quickly and within the given time constraints. Optimizing your code involves various strategies that can help reduce time and space complexity, making your solution faster and more scalable.\n\n" +
      "### 1. **Choosing the Right Algorithm**\n" +
      "The first step in optimizing your code is choosing the most efficient algorithm for the task at hand. For instance, instead of using brute force methods, look for algorithms that minimize the number of operations. Consider using dynamic programming, divide and conquer, or greedy algorithms where applicable.\n\n" +
      "### 2. **Data Structures Matter**\n" +
      "Using the right data structure can have a huge impact on your code's performance. For example, choosing a hash map for quick lookups or a priority queue for handling dynamic data can save time. Avoid using linear data structures like arrays or lists if you require frequent insertion or deletion operations.\n\n" +
      "### 3. **Avoiding Unnecessary Computations**\n" +
      "It's easy to get caught up in recalculating things you’ve already computed. Memoization or caching intermediate results is an essential technique in competitive programming. Storing results for future reference can save time, especially when you deal with recursive problems.\n\n" +
      "### 4. **Time Complexity and Space Complexity**\n" +
      "Always analyze the time and space complexity of your solution. Aim for algorithms with lower time complexity (O(log n), O(n log n), etc.) and space complexity. If your solution requires a large amount of memory, consider using space-efficient techniques like in-place algorithms.\n\n" +
      "### 5. **Understanding the Problem Statement Thoroughly**\n" +
      "It's tempting to jump straight into coding, but understanding the problem statement is crucial. Break down the problem and look for edge cases that might affect your solution's performance. This can help you avoid unnecessary computations or bottlenecks.\n\n" +
      "### 6. **Code Optimization Techniques**\n" +
      "There are various coding techniques you can use to make your code more efficient, such as:\n" +
      "- **Input/Output Optimization**: In many contests, fast input/output is critical. Using faster I/O functions (like `scanf`/`printf` in C/C++ or `sys.stdin`/`sys.stdout` in Python) can save time.\n" +
      "- **Loop Unrolling**: Reduce the overhead of looping by manually unrolling loops in performance-critical sections.\n" +
      "- **Bit Manipulation**: Bitwise operations are often faster than regular arithmetic operations, especially for tasks like checking even/odd or calculating powers of 2.\n\n" +
      "**Conclusion**:\n" +
      "Optimizing code in competitive programming is not just about writing the shortest code, but writing the most efficient code. By choosing the right algorithms, using appropriate data structures, avoiding unnecessary computations, and applying time and space optimizations, you can improve your performance in programming contests. Keep practicing these techniques, and soon you'll find yourself solving problems faster and more efficiently."
  },
  {
    title: "ICPC Regionals 2024 - Amritapuri (Experience)",
    date: "2025-01-04",
    excerpt: "A detailed experience of participating in the ICPC Regionals at Amritapuri, sharing insights and takeaways.",
    content:
      "Participating in the ICPC Regionals at Amritapuri was an unforgettable experience. The competition atmosphere was electric, and the challenges were both thrilling and intense. Here's a summary of my journey.\n\n" +
      "### 1. **The Venue**\n" +
      "The event was hosted at Amritapuri, and the venue was nothing short of impressive. The campus was bustling with energy, and the event hall was perfectly arranged for the competition. The energy from fellow participants and volunteers made the experience truly remarkable.\n\n" +
      "### 2. **The Preparation**\n" +
      "The weeks leading up to the contest were a mix of excitement and nerves. I spent a lot of time preparing with my team, solving problems from past ICPC contests, and discussing different strategies for tackling problems under time constraints. We focused on developing a deep understanding of algorithms and data structures, knowing that speed and efficiency were critical for success.\n\n" +
      "### 3. **The Contest**\n" +
      "On the day of the contest, we arrived early and got settled in our designated area. The opening ceremony was brief but motivating, reminding us that this was more than just a competition – it was a celebration of our hard work and a chance to test our skills against the best minds in programming.\n\n" +
      "The problems themselves were a mix of algorithmic and logical challenges, requiring both creativity and precision. We tackled problems ranging from graph theory to dynamic programming. Some were intuitive, while others required deep analysis and tricky edge case handling. Time management was key, and we had to balance solving known problems and attempting more difficult ones.\n\n" +
      "### 4. **The Experience**\n" +
      "As the clock ticked down, there was an exhilarating rush of adrenaline. The challenge of solving as many problems as possible within the time limit, while maintaining accuracy, was intense. Though we didn’t manage to qualify for the finals, the overall experience was immensely valuable. We learned a lot from our mistakes and the problems we couldn’t solve.\n\n" +
      "### 5. **Key Takeaways**\n" +
      "- **Teamwork is Everything**: We worked closely as a team, each contributing our strengths and helping each other when the going got tough.\n" +
      "- **Stay Calm Under Pressure**: The ability to keep cool and think clearly is just as important as problem-solving skills.\n" +
      "- **Practice Makes Perfect**: The weeks of preparation helped us immensely, and continuous practice will improve our performance in future contests.\n\n" +
      "### Conclusion\n" +
      "ICPC Regionals at Amritapuri was an incredible learning experience. Although we didn’t qualify for the finals, the exposure to challenging problems and the chance to measure our skills against the best was invaluable. The experience reinforced the importance of teamwork, problem-solving under pressure, and continuous learning."
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="p-6 md:p-8 animate-fade-in">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in">Blog</h2>
        <div className="w-12 h-1 bg-[#ffd700] rounded-full animate-scale-in"></div>
      </header>

      {selectedPost ? (
        <div className="bg-[#2f2f2f] rounded-xl p-6 animate-scale-in">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-4 text-[#ffd700] hover:underline"
          >
            &larr; Back to all posts
          </button>
          <h3 className="text-2xl font-semibold text-white mb-2">{selectedPost.title}</h3>
          <p className="text-gray-400 mb-4">{selectedPost.date}</p>
          <ReactMarkdown className="text-gray-300 whitespace-pre-line">
            {selectedPost.content}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#2f2f2f] rounded-xl p-6 hover:bg-[#373737] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-[#ffd700] hover:underline"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
